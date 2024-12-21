"use client";

import { updateFeed } from "@/apis/feed-api";
import SelectCategory from "@/app/(main)/feed/upload/_component/category";
import HashtagInput from "@/app/(main)/feed/upload/_component/hashtag-input";
import ImageUploader from "@/app/(main)/feed/upload/_component/image-uploader";
import TextInput from "@/app/(main)/feed/upload/_component/text-input";
import ArrowBack from "@/assets/icons/arrow-back.svg";
import Icon from "@/components/commons/icons";
import useFeedRegistration from "@/hooks/feed/use-feed-upload";
import usePresignedURL from "@/hooks/feed/use-image-upload";
import cn from "@/lib/tailwind-cn";
import useUploadTextStore from "@/stores/useUploadTextStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UploadPage() {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  const { performId, content, category, hashTags, photos, fileUrls, feedId, setHashTags, setPhotos } =
    useUploadTextStore();
  const { uploadImages, isLoading: isUploading } = usePresignedURL();
  const { registerFeed, isLoading: isRegistering } = useFeedRegistration();

  useEffect(() => {
    if (fileUrls.length > 0) {
      setPhotos(() => fileUrls);
    }
  }, [fileUrls, setPhotos]);

  function handleAddHashTags(tags: string[]) {
    const addHashTags = Array.from(new Set([...hashTags, ...tags]));
    setHashTags(addHashTags);
    console.log(hashTags);
  }

  function handleRemoveHashTag(tag: string) {
    setHashTags(hashTags.filter((t) => t !== tag));
  }

  async function handleUpload() {
    if (photos.length === 0) {
      alert("사진을 업로드해주세요.");
      return;
    }

    try {
      // photos에 이미 string이 있을 경우 이미지 파일만 선택
      const uploadedUrls = await uploadImages(photos.filter((photo): photo is File => photo instanceof File));
      // url 주소 추가
      const baseAddrss = process.env.NEXT_PUBLIC_S3_BUCKET_URL;
      const fullUrls = [...fileUrls, ...uploadedUrls.map((url) => `${baseAddrss}${url}`)];

      const requestData = {
        performId: "PF254874",
        content,
        topic: category,
        hashTags: hashTags.length > 0 ? hashTags : [""],
        fileUrls: fullUrls,
      };

      // 피드 수정
      if (feedId) {
        await updateFeed({ feedId, data: requestData });
        console.log("data: ", requestData);
        alert("수정 성공");
      } else {
        // 피드 등록
        await registerFeed(requestData);
        alert("등록 성공");
      }
      // 초기화
      useUploadTextStore.getState().reset();
      router.push("/feed");
    } catch (err) {
      console.error(feedId ? "수정 실패" : "등록 실패", err);
      alert(feedId ? "수정 실패" : "등록 실패");
    }
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className={cn("relative flex items-center justify-between w-full h-header px-4 py-2 bg-white")}>
        <div className="flex items-center justify-start space-x-2">
          <Icon onClick={handleGoBack} size={24} className="cursor-pointer">
            <ArrowBack />
          </Icon>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold text-center">
          <h2>피드</h2>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button type="submit" onClick={handleUpload} className="text-primary font-semibold text-sm cursor-pointer">
            올리기
          </button>
        </div>
      </header>
      <SelectCategory />
      <ImageUploader />
      <TextInput />
      <HashtagInput hashTags={hashTags} onAddHashTags={handleAddHashTags} onRemoveHashTag={handleRemoveHashTag} />
      {/* <AddInfo /> */}
    </div>
  );
}
