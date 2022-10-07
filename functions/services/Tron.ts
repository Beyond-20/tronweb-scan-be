import axios from "axios"
import { config } from "../config/config";
const TronWeb  = require('tronweb');


const tronWeb = new TronWeb({
  fullHost: config.tron_url,
  headers: { "TRON-PRO-API-KEY": config.tron_secret_key },
  privateKey: ""
})

export class Tron {
  public static async getTransactionReceipt(hash: string) {
    try {
      const result = await tronWeb.trx.getTransactionInfo(hash)      
      return result
    } catch (error) {      
      return Promise.reject(error)
    }
  }

  public static async getAccount(acc: string) {
    try {
      const result = await tronWeb.trx.getAccount(acc)      
      return result
    } catch (error) {      
      return Promise.reject(error)
    }
  }
  public static async getBlock() {
    try {
      const result = await tronWeb.trx.getBlock(12344)      
      return result
    } catch (error) {      
      return Promise.reject(error)
    }
  }
  public static async getCurrentBlock() {
    try {
      const result = await tronWeb.trx.getCurrentBlock()      
      return result
    } catch (error) {      
      return Promise.reject(error)
    }
  }

  public static async getTransactionFromBlock(BlockNumber: number) {
    try {             
      const result = await tronWeb.trx.getTransactionFromBlock(BlockNumber)      
      return result
    } catch (error) {            
      return Promise.reject(error)
    }
  }
  public static getReceiverAddress(topics: string[]): string {
    return this.getAddress(topics[1])
  }


  public static getSenderAddress(topics: string[]): string {
    return this.getAddress(topics[2])
  }

  public static getAddress(hex: string): string {
    let buffer = hex.replace(/^0+/, '')
    if (buffer.slice(0, 2) !== "41") {
      buffer = "41" + buffer
    }
    return tronWeb.address.fromHex(buffer)
  }
}