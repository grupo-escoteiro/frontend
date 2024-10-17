// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold
// } from '@google/generative-ai';

// // const API_KEY = 'AIzaSyBx1Chb9BroVh72B9JdQCz5klU5cDvfu2s';

// // const genAI = new GoogleGenerativeAI(API_KEY);
// const safetySettings = [
//   {
//     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//     threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//     threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//   },
// ];

// const model = GoogleGenerativeAI.getGenerativeModel({ model: 'gemini-1.5-flash', safetySettings: safetySettings });

// // const prompt = 'Escreva uma história curta sobre escoteiros.';

// // const result = await model.generateContent(prompt);
// // console.log(result.response.text());
