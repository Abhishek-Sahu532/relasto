import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, TextArea, Radio, RadioGroup, Text, RatingBar, GoogleMap } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingPageCard from "../../components/LandingPageCard";

export default function PropertyDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Rahul's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <div className="flex flex-col items-center justify-start w-full gap-10">
            <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-start w-full gap-6 max-w-[1200px]">
                <div className="flex flex-row justify-start w-[66%]">
                  <Img src="images/img_rectangle_5610.png" alt="image" className="w-full object-cover rounded-[10px]" />
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                  <Img
                    src="images/img_rectangle_5611.png"
                    alt="image_one"
                    className="w-full object-cover rounded-[10px]"
                  />
                  <div className="h-[263px] w-full relative">
                    <Img
                      src="images/img_rectangle_5612.png"
                      alt="image_two"
                      className="justify-center h-[263px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[10px]"
                    />
                    <Button
                      color="white_A700"
                      size="lg"
                      leftIcon={<Img src="images/img_icon_image.svg" alt="icon - image" />}
                      className="gap-1.5 bottom-[6%] right-[4%] m-auto text-gray-900 font-bold min-w-[122px] absolute"
                    >
                      3 more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-start items-start w-full gap-6 max-w-[1200px]">
                <div className="flex flex-col items-center justify-start w-[66%] gap-6">
                  <div className="flex flex-col items-center justify-start w-full gap-11 p-[39px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                      <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                        <Heading size="3xl" as="h1" className="tracking-[-0.56px]">
                          Trovilla Plan in Sereno Canyon - Estate Collection by Toll Brothers
                        </Heading>
                        <Heading size="lg" as="h2" className="tracking-[-0.40px]">
                          2861 62nd Ave, Oakland, CA 94605
                        </Heading>
                      </div>
                      <div className="flex flex-row w-3/4 gap-4">
                        <div className="flex flex-col items-start justify-start gap-[5px] p-[5px] border-gray-600_02 border border-solid bg-white-A700 rounded-[10px]">
                          <Heading size="2xl" as="h3" className="ml-[17px] tracking-[-0.48px]">
                            $649,900
                          </Heading>
                          <Heading size="xs" as="h4" className="ml-[17px] !text-gray-600_02">
                            Online / Cash Payment
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-1 p-[5px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                          <Heading size="2xl" as="h5" className="ml-[17px] tracking-[-0.48px]">
                            $850 / month
                          </Heading>
                          <Heading size="xs" as="h6" className="ml-[17px] !text-gray-600_02">
                            0% EMI for 6 Months
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full pt-[3px] gap-3">
                      <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                        Well-constructed 1562 Sq Ft Home Is Now Offering To You In Uttara For Sale
                      </Heading>
                      <Text as="p" className="!text-gray-600_02">
                        A slider is great way to display a slideshow featuring images or videos, usually on your
                        homepage.
                        <br />
                        Adding sliders to your site is no longer difficult. You don’t have to know coding anymore. Just
                        use a slider widget and it will automatically insert the slider on your web page.
                        <br />
                        So, the Elementor slider would be a great tool to work with when building a WordPress site.
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-6">
                      <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                        <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
                          Local Information
                        </Heading>
                        <div className="flex flex-row justify-start gap-3">
                          <Button
                            color="blue_gray_100_01"
                            size="lg"
                            variant="outline"
                            className="font-semibold min-w-[119px]"
                          >
                            Map
                          </Button>
                          <Button size="lg" className="font-semibold min-w-[119px]">
                            Schools
                          </Button>
                          <Button
                            color="blue_gray_100_01"
                            size="lg"
                            variant="outline"
                            className="font-semibold min-w-[119px]"
                          >
                            Crime
                          </Button>
                          <Button
                            color="blue_gray_100_01"
                            size="lg"
                            variant="outline"
                            className="font-semibold min-w-[119px]"
                          >
                            Shop & Eat
                          </Button>
                        </div>
                      </div>
                      <GoogleMap showMarker={false} className="h-[400px] w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full gap-[19px] p-[39px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <Heading size="3xl" as="h3" className="mt-[3px] tracking-[-0.56px]">
                      Home Highlights
                    </Heading>
                    <div className="flex flex-row w-full gap-[150px]">
                      <div className="flex flex-col items-center justify-start w-2/5 gap-2.5">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[41%] gap-2.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-[5px] !text-gray-600_02">
                              Parking
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right !font-semibold">
                            No Info
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[42%] gap-2.5 py-0.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px !text-gray-600_02">
                              Outdoor
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right !font-semibold">
                            No Info
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[35%] gap-2.5 py-0.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px !text-gray-600_02">
                              A/C
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right !font-semibold">
                            No Info
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[43%] gap-2.5 py-0.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px !text-gray-600_02">
                              Year Built
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right !font-semibold">
                            2021
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-2/5 mb-[42px] gap-2.5">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[36%] gap-2.5 py-0.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px !text-gray-600_02">
                              HOA
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right !font-semibold">
                            None
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[45%] gap-2.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-[5px] !text-gray-600_02">
                              Price/Sqft
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right !font-semibold">
                            $560
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[39%] gap-2.5 py-0.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px !text-gray-600_02">
                              Listed
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right !font-semibold">
                            No Info
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full gap-[21px] p-[39px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <Heading size="3xl" as="h3" className="mt-[3px] tracking-[-0.56px]">
                      Agent Information
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-6">
                      <Img
                        src="images/img_rectangle_5599.png"
                        alt="image_three"
                        className="w-[150px] object-cover rounded-[10px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[26%] gap-0.5">
                        <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                          Bruno Fernandes
                        </Heading>
                        <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                          <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                          <Heading as="h6" className="mr-1.5">
                            4 review
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2.5 py-0.5">
                          <Img src="images/img_icon_20px_email.svg" alt="icon20pxemail" className="h-5 w-5" />
                          <Text size="xs" as="p" className="mt-0.5 !text-gray-600_02">
                            bruno@relasto .com
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2.5 py-0.5">
                          <Img src="images/img_icon_20px_call.svg" alt="icon20pxcall" className="h-5 w-5" />
                          <Text size="xs" as="p" className="!text-gray-600_02">
                            +65 0231 965 965
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-10 p-[23px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                    <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
                      Request for Visit
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <RadioGroup name="requestfor" className="flex flex-col">
                        <Radio
                          value="fullname"
                          label="Full Name"
                          className="pl-3.5 pr-[35px] gap-3.5 py-[17px] text-gray-600_02 font-semibold"
                        />
                        <Radio
                          value="emailaddress"
                          label="Email Address"
                          className="mt-3 pl-3.5 pr-[35px] gap-3.5 py-[17px] text-gray-600_02 font-semibold"
                        />
                        <Radio
                          value="phonenumber"
                          label="Phone Number"
                          className="mt-3 pl-3.5 pr-[35px] gap-3.5 py-[17px] text-gray-600_02 font-semibold"
                        />
                        <Radio
                          value="date"
                          label="Date"
                          className="mt-3 pl-3.5 pr-[35px] gap-3.5 py-[17px] text-gray-600_02 font-semibold"
                        />
                      </RadioGroup>
                      <TextArea
                        name="inputbox_one"
                        placeholder="Message"
                        className="w-full text-gray-600_02 font-semibold"
                      />
                    </div>
                  </div>
                  <Button size="2xl" className="w-full font-semibold">
                    Send Request
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[39px] max-w-[1200px]">
              <div className="flex flex-row justify-between items-start w-full pt-[3px]">
                <Heading size="3xl" as="h2" className="tracking-[-0.56px]">
                  Latest Property Listings
                </Heading>
                <div className="flex flex-row justify-start items-center mt-[3px] gap-2">
                  <Heading size="md" as="h3" className="mt-0.5 !text-orange-A700">
                    Explore All
                  </Heading>
                  <Img src="images/img_icon_24px_v.svg" alt="iconarrow_one" className="h-6 w-6" />
                </div>
              </div>
              <div className="flex flex-row w-full gap-6">
                <LandingPageCard className="flex flex-col items-center justify-start w-[32%]" />
                <LandingPageCard
                  imageOne="images/img_image_1.png"
                  className="flex flex-col items-center justify-start w-[32%]"
                />
                <LandingPageCard
                  imageOne="images/img_image_2.png"
                  className="flex flex-col items-center justify-start w-[32%]"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" />
      </div>
    </>
  );
}
