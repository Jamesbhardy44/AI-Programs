import{ config } from "dotenv"
import readline from "readline";

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



   

config()
import {Configuration,OpenAIApi} from "openai"
const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))



openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "Give me a JavaScript problem"}]
}).then(res =>{
    console.log(res.data.choices[0].message.content)
})

