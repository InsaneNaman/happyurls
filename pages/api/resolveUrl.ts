import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

//constants
import { STATUS_TYPE } from "consts";

//types
import { ServerResponseType } from "@types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //reject request if not POST Method

  if (req.method !== "POST") {
    const responseBody: ServerResponseType = {
      type: STATUS_TYPE.ERROR,
      msg: "Please, send a POST request",
      data: null,
    };

    res.status(405).json(responseBody); //send response to client
    return;
  }
  const { shortID } = req.body;
  try {
    //send request to DB
    const axiosResponse = await axios({
      url: `${process.env.GRAPHQL_ENDPOINT}`,
      method: "post",
      headers: {
        Authorization: `Bearer ${process.env.DB_KEY}`,
      },
      data: {
        query: `
            query getlongURL {
                resolveUrlByShortID(shortID:"${shortID}"){
                    _id,
                    shortID,
                    longURL
                  }
              }
            `,
      },
    });
    //consume response from DB

    if (axiosResponse) {
      const graphQLResponse = axiosResponse.data;
      const urlData = graphQLResponse.data.resolveUrlByShortID;
      if (urlData) {
        //create response
        const resBody: ServerResponseType = {
          type: STATUS_TYPE.SUCCESS,
          msg: "Successfully resolved short URL",
          data: urlData,
        };

        res.status(200).json(resBody); //send response to client
      } else {
        const resBody: ServerResponseType = {
          type: STATUS_TYPE.ERROR,
          msg: "There is no such resource with this shortID",
          data: {
            _id: null,
            shortID: null,
            longURL: "/404",
          },
        };

        res.status(404).json(resBody);
      }
      return;
    }
  } catch (err) {
    //create response object
    const resBody: ServerResponseType = {
      type: STATUS_TYPE.ERROR,
      msg: "Some error occured. Please, report this issue to Developers.",
      data: err,
    };

    res.status(500).json(resBody); //send response to client
  }
};
