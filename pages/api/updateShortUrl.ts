/*
ToDo- Skip this file. This file needs rework
*/

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

//utils
import { generateShortID } from "utils/common";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).json({
      type: "error",
      code: "not-post",
      msg: "Please, send a POST request",
      data: null,
    });
    return;
  }
  const { longURL } = req.body;
  const shortID = generateShortID();
  try {
    const axiosResponse = await axios({
      url: `${process.env.GRAPHQL_ENDPOINT}`,
      method: "post",
      headers: {
        Authorization: `Bearer ${process.env.DB_KEY}`,
      },
      data: {
        query: `
        mutation {
            createHappyURL(
              data: { shortID: "${shortID}", longURL: "${longURL}" }
            ) {
              _id
              shortID
              longURL
            }
          }
            `,
      },
    });
    if (axiosResponse) {
      const graphQLResponse = axiosResponse.data;
      const urlData = graphQLResponse.data.createHappyURL;
      if (urlData) {
        res.status(200).json({
          type: "success",
          code: "resource-created",
          msg: "Successfully created short URL",
          data: urlData,
        });
      } else {
        res.status(200).json({
          type: "error",
          code: "resource-not-created",
          msg: "Unable to create shortID",
          data: {
            _id: null,
            shortID: null,
            longURL: "/404",
          },
        });
      }
      return;
    }
  } catch (err) {
    res.status(500).json({
      type: "error",
      code: "internal-server-error",
      msg: "Some error occured. Please, report this issue to Developers.",
      data: err,
    });
  }
};
