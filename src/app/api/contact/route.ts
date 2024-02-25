import axios from "axios";
import { NextResponse } from "next/server";

const FORM_URL = 'https://api.web3forms.com/submit';
const FORM_API_KEY = process.env.CONTACT_FORM_API_KEY as string;

export async function POST(request: Request) {
    const { formData } = await request.json()
    const updatedFormData = new FormData()

    const sendMessage = async (formData: FormData) => {
      const response = await axios.post(FORM_URL, formData);
      const status = response?.status;
    
      if (status >= 400) {
        return {
          status,
          message: response?.statusText,
        };
      }
    
      const data = response.data;
    
      return {
        status,
        data,
      };
    };

    try {
        updatedFormData.append('access_key', FORM_API_KEY);

        for (const key in formData) {
            updatedFormData.append(key, formData[key]);
        }

        const response = await sendMessage(updatedFormData);

        return NextResponse.json({ status: 200, message: response?.data?.message })
    } catch (error) {
        return NextResponse.json(error)
    }
}