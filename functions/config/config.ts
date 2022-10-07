import path from "path"
import dotenv from "dotenv"
dotenv.config({ path: path.join(__dirname, "../../.env") })

interface Config {
  env: string,
  port: number,
  domain: string,
  mongo_uri: string,
  secret_key: string,
  domain_secret_key: string,
  btse_url: string,
  btse_api_key: string,
  btse_secret_key: string,
  tron_url: string,
  tron_secret_key: string,
}

export const config: Config = {
  env: process.env.NODE_ENV as string,
  port: parseInt(process.env.PORT as string) || 3000,
  domain: process.env.DOMAIN as string,
  mongo_uri: process.env.MONGO_URI as string,
  secret_key: process.env.SECRET_KEY as string,
  domain_secret_key: process.env.DOMAIN_SECRET_KEY as string,
  btse_url: process.env.BTSE_URL as string,
  btse_api_key: process.env.BTSE_API_KEY as string,
  btse_secret_key: process.env.BTSE_SECRET_KEY as string,
  tron_url: process.env.TRON_URL as string,
  tron_secret_key: process.env.TRON_SECRET_KEY as string,
}