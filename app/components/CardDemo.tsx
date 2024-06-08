import React from "react";
import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import img from "@/public/assets/lighting.png";
import img2 from "@/public/assets/Voice.png";
import img3 from "@/public/assets/Planned Path.png";
import img4 from "@/public/assets/Scale Up.png";
import img5 from "@/public/assets/Private.png";
import img6 from "@/public/assets/Security Shield.png";
import img7 from "@/public/assets/Tools.png";
import img8 from "@/public/assets/Tune.png";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const CardDemo = () => {
  const notifications = [
    {
      img: img,
      description:
        "Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.",
    },
    {
      img: img2,
      description:
        "  Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations",
    },
    {
      img: img3,
      description:
        " Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction.",
    },
    {
      img: img4,
      description:
        "Navigate through complex conversations with ease, thanks to our AI's ability to understand and adapt to various conversational pathways.",
    },
    {
      img: img5,
      description:
        "From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business.",
    },
    {
      img: img6,
      description:
        "Enable your phone agent to access external APIs, live during the call, to access customer records and knowledgebases, and perform actions like scheduling appointments.",
    },
    {
      img: img7,
      description:
        "Even during moments of high volume, your enterprise’ infrastructure is partitioned from our general API, increasing the reliability of your phone agents.",
    },
    {
      img: img8,
      description:
        "Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness.",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center mt-8 w-[100%]   scale-90 sm:scale-100 ">
        <Carousel className="w-[75dvw] ">
          <CarouselContent className="">
            {notifications.map((notification, index) => (
              <CarouselItem className="sm:basis-1/2 " key={index}>
                <div className="p-1  ">
                  <Card className=" scale-75 sm:scale-100">
                    <CardContent className="flex aspect-square items-center justify-center p-6 ">
                      <span className="text-4xl font-semibold ">
                        <Card className={cn("w-[380px]  ")}>
                          <CardContent className="grid gap-4 ">
                            <div className=" flex items-center space-x-4 rounded-md  p-8 justify-center ">
                              <Image src={notification.img} alt="img" />
                            </div>
                            <div>
                              <div className="space-y-1">
                                <p className="text-xs font-normal leading-none">
                                  {notification.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full bg-gradient-to-r from-orange-100 to-orange-300 text-black">
                              <BellIcon className="mr-2 h-4 w-4" /> Try It read
                            </Button>
                          </CardFooter>
                        </Card>
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default CardDemo;
