import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";

//utils
import { generateErrorToast, generateSuccessToast } from "utils/Toast";

function urlResolver() {
  const router = useRouter();
  const params = router.query.urlResolver;
  const { data, error } = useSWR(
    `${router?.query.urlResolver}`,
    async (shortID) => {
      if (shortID != "undefined") {
        try {
          const axiosResponse = await axios.post("/api/resolveUrl", {
            shortID,
          });
          const dbData = axiosResponse.data;
          generateSuccessToast("Redirecting 🚀");
          return {
            longURL: dbData.data.longURL,
          };
        } catch (err) {
          generateErrorToast(
            "I apologies but I had an Error 😔. Please report my devs."
          );
        }
      }
      return null;
    }
  );

  if (!data || !params) {
    return (
      <div className={`flex flex-col h-screen`}>
        <div className="flex-grow">
          <div className={`flex flex-col justify-center items-center h-full`}>
            <div
              className={`flex text-2xl lg:text-2xl xl:text-3xl justify-center items-center space-x-4`}
            >
              <div>
                Redirecting.{" "}
                <span className="gradientTextNeonPink">Please Wait </span>
              </div>
              <div>
                <i className="gg-spinner-alt"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={`text-center m-5`}>
          Built With ❤️ and 🔥 by{" "}
          <a
            href="https://twitter.com/InsaneNaman"
            target="_blank"
            rel="noopener"
          >
            Naman Gupta
          </a>
        </div>
      </div>
    );
  }

  if (data) {
    const url = data.longURL;
    router.push(url);
  }

  if (error) {
    generateErrorToast(
      "I apologies but I had an Error 😔. Please report my devs."
    );
  }
  return <></>;
}

export default urlResolver;
