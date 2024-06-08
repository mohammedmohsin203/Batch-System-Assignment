import Image from "next/image";
import img from "../../public/assets/img.png";
import img2 from "../../public/assets/img2.svg";

import { BellIcon, CheckIcon } from "@radix-ui/react-icons";

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
import CardDemo from "./CardDemo";

const Features = () => {
  return (
<>
    <div className="flex justify-center items-center mt-8 w-[100%] sm:scale-100 scale-90">
      <Carousel className="w-[80dvw] sm:w-[75dvw] ">
        <CarouselContent>
          <CarouselItem className="sm:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6  ">
                  <span className="text-4xl font-semibold">
                    <Card className={cn("w-[380px] scale-75 sm:scale-100 ")}>
                      <CardHeader>
                        <CardTitle className="text-md">
                          Explore TOINGG. in GPT store
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-4 ">
                        <div className=" flex items-center space-x-4 rounded-md  p-4">
                          <Image src={img} alt="img" />{" "}
                        </div>
                        <div>
                          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-black" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium leading-none">
                                Interactive Communication:
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Engage in single or batch calls using TOINGG
                                GPT.
                              </p>
                            </div>
                          </div>
                          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-black" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium leading-none">
                                Advanced Features:{" "}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Leverage GPT for real-time sentiment analysis
                                during calls.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-gradient-to-r from-orange-100 to-orange-300 text-black">
                          <CheckIcon className="mr-2 h-4 w-4" /> Try Now !
                        </Button>
                      </CardFooter>
                    </Card>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    <Card className={cn("w-[380px] scale-75 sm:scale-100 ")}>
                      <CardContent className="grid gap-4">
                        <div className=" flex items-center space-x-4 rounded-md  p-4">
                          <Image src={img2} alt="img" className="rounded-xl"/>{" "}
                        </div>
                        <div>
                          <div className="space-y-1">
                            <p className="text-[1.5rem] font-bold leading-none">
                              Build Your Own Voice Agent{" "}
                              <span>in just few lines of code</span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                      <Button className="w-full bg-gradient-to-r from-orange-100 to-orange-300 text-black">
                      <BellIcon className="mr-2 h-4 w-4" /> Try It
                          read
                        </Button>
                      </CardFooter>
                    </Card>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
<CardDemo/>

    </>
  );
};

export default Features;
