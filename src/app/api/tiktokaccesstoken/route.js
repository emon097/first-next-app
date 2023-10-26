import axios from "axios";
import querystring from "querystring";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { code } = req.body;
      const decode = decodeURI(code);
      const tokenEndpoint = "https://open.tiktokapis.com/v2/oauth/token/";
      const params = {
        client_key: "aw1r5czwe50oigz9",
        client_secret: "Qzf2CrbcPB77dmTDPDsL0RNjuf6PTTrM",
        code: decode,
        grant_type: "authorization_code",
        redirect_uri: "https://first-next-app1.vercel.app/redirect",
      };

      const response = await axios.post(
        tokenEndpoint,
        querystring.stringify(params),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
          },
        }
      );

      if (response.data.access_token) {
        const allvideosdata = await axios.post(
          "https://open.tiktokapis.com/v2/video/list/?fields=id,title,video_description,duration,cover_image_url,embed_link",
          {
            max_count: 20,
          },
          {
            headers: {
              Authorization: `Bearer ${response.data.access_token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log(allvideosdata.data.data.videos); // Lists all videos of the user along with other details
        res.status(200).json(allvideosdata.data.data.videos);
      }
    } catch (error) {
      console.error("Error during callback:", error.message);
      res.status(500).send("An error occurred during the login process.");
    }
  } else {
    res.status(405).end(); // Respond with "Method Not Allowed" for non-POST requests
  }
};
