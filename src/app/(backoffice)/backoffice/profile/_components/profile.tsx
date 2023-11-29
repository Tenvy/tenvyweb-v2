'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const supabase = createClient(
  "https://hphsptczqhoobtztuwvx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwaHNwdGN6cWhvb2J0enR1d3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MTYwMjIsImV4cCI6MjAxNTE5MjAyMn0.Lq78KsaVcpe7l3fCyl5OJ2LBXyopXhtl570sgOqmpsM"
);

const Page = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [imageFile, setImageFile] = useState<string>("");
  const [toggle, setToggle] = useState(false)

  const getImage = async () => {
    const { data } = await supabase.storage
      .from("profile_images")
      .getPublicUrl("profile/image.png")

    console.log(data.publicUrl);
    setImageSrc(data.publicUrl);
  };

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];

    const localImageUrl = URL.createObjectURL(file);
    setImageFile(localImageUrl);
    setToggle(true)
    
    const { error } = await supabase.storage
      .from("profile_images")
      .upload(`profile/image.png`, file, {
        cacheControl: "0",
        upsert: true,
      });

    if (error) {
      alert("Error uploading file.");
      setToggle(false)
      setImageFile("")
      return;
    }

    alert("Successfully Uploaded");
    await getImage();
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      {toggle ?
        <Image
        src={imageFile}
        unoptimized
        width={300}
        height={300}
        alt="profile"
     />
      : (
        <Image
          src={imageSrc}
          unoptimized
          key={Math.random()}
          width={300}
          height={300}
          alt="profile"
        />
      )}
      <input type="file" onChange={(e) => uploadImage(e)} />
    </div>
  );
};

export default Page;