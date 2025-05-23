import express from 'express'
import * as dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey : 'YOUR_API_KEY',
})

router.route('/').get((req,res) => {
    res.status(200).json({ message: 'Hello from DALL-E!' });
})
router.route('/').post( async (req,res) => {
    try {
        const {prompt}  = req.body;
        const aiResponse = await openai.images.generate({
            prompt,
            n:1,
            size : '1024x1024',
            response_format : 'b64_json'
        })
        if (!prompt) {
            return res.status(400).json({ message: 'Please provide a prompt' });
        }

        const image = aiResponse.data[0].b64_json;

        res.status(200).json({photo : image})
    } catch (error) {
        console.log('Error with dalleRoute : ' , error)
        // res.status(500).send(error?.response.data.error.message)
    } 
})
export default router;