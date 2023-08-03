import React from "react";
import AdminLayout from "../../layout/adminLayout";
import { SectionHeading } from "../../components/dashboard/common/common";
import Link from "next/link";

const TripHistory = () => {
  return (
    <AdminLayout>
      <div className="bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded">
        <SectionHeading heading="Trip Now" />
        <div>
          <p>The driver can manage a ride from here:</p>
          <div className="space-y-16">
            <div>
              <h5 className="border-b w-1/2 pb-1 border-[#FFA525] text-[#FFA525]">
                Step - 1
              </h5>
              <p>
                <span className="font-bold">Ride Request: </span> When a user request to you for a ride then you can see the user information.
              </p>
              <img
                className="h-auto w-auto mx-auto mt-2 shadow-sm"
                src="/images/user-panel/allow-location.png"
                alt=""
              />
            </div>
            <div>
              <h5 className="border-b w-1/2 pb-1 border-[#FFA525] text-[#FFA525]">
                Step - 2
              </h5>
              <p>
                <span className="font-bold">Select Service: </span> After allow
                location, you have to select a service to take a ride.
              </p>
              <img
                className="h-auto w-auto mx-auto mt-2 shadow-sm"
                src="/images/user-panel/select-location.png"
                alt=""
              />
            </div>
            <div>
              <h5 className="border-b w-1/2 pb-1 border-[#FFA525] text-[#FFA525]">
                Step - 3
              </h5>
              <p>
                <span className="font-bold">Select Destination: </span> Now you
                have to select your location from where you want to start ride
                and where is your destination.
              </p>
              <img
                className="h-auto w-auto mx-auto mt-2 shadow-sm"
                src="/images/user-panel/destination-location.png"
                alt=""
              />
            </div>
            <div>
              <h5 className="border-b w-1/2 pb-1 border-[#FFA525] text-[#FFA525]">
                Step - 4
              </h5>
              <p>
                <span className="font-bold">Select Transport: </span> Then you
                have to select a transport.
              </p>
              <img
                className="h-auto w-auto mx-auto mt-2 shadow-sm"
                src="/images/user-panel/select-transport.png"
                alt=""
              />
            </div>
            <div>
              <h5 className="border-b w-1/2 pb-1 border-[#FFA525] text-[#FFA525]">
                Step - 5
              </h5>
              <p>
                <span className="font-bold">Select Vehicle: </span> You have to
                select a vehicle after select transport.
              </p>
              <img
                className="h-auto w-auto mx-auto mt-2 shadow-sm"
                src="/images/user-panel/select-car.png"
                alt=""
              />
            </div>
            <div>
              <h5 className="border-b w-1/2 pb-1 border-[#FFA525] text-[#FFA525]">
                Step - 6
              </h5>
              <p>
                <span className="font-bold">Ride Now: </span> You will see this
                page after select a vehicle. Now click on the ride now button to
                take the ride.
              </p>
              <img
                className="h-auto w-auto mx-auto mt-2 shadow-sm"
                src="/images/user-panel/ride-now.png"
                alt=""
              />
            </div>
            <div>
              <h5 className="border-b w-1/2 pb-1 border-[#FFA525] text-[#FFA525]">
                Step - 7
              </h5>
              <p>
                <span className="font-bold">Confirmation Ride: </span> You can
                apply coupon here to get discount. Then you have to select a
                payment method and confirm the ride by clicking the confirm ride
                button.
              </p>
              <img
                className="h-auto w-auto mx-auto mt-2 shadow-sm"
                src="/images/user-panel/confirm-ride.png"
                alt=""
              />
            </div>
            <div>
              <h5 className="border-b w-1/2 pb-1 border-[#FFA525] text-[#FFA525]">
                Step - 8
              </h5>
              <p>
                <span className="font-bold">Request Ongoing: </span> By
                confirmation the ride you have to wait for the response of
                driver.
              </p>
              <img
                className="h-auto w-auto mx-auto mt-2 shadow-sm"
                src="/images/user-panel/request.png"
                alt=""
              />
            </div>
            <div>
              <h5 className="border-b w-1/2 pb-1 border-[#FFA525] text-[#FFA525]">
                Step - 9
              </h5>
              <p>
                <span className="font-bold">On Ride: </span> When driver will
                accept your ride, then you can direct call or message to the
                driver from here.
              </p>
              <img
                className="h-auto w-auto mx-auto mt-2 shadow-sm"
                src="/images/user-panel/call-message.png"
                alt=""
              />
            </div>
            <div>
              <h5 className="border-b w-1/2 pb-1 border-[#FFA525] text-[#FFA525]">
                Step - 10
              </h5>
              <p>
                <span className="font-bold">Payment: </span> After completing
                the ride, you have to payment the actual amount which is shown
                here. You can direct payment from your wallet (if your wallet
                balance is available) or you can payment by select a payment
                method which is provided in the list.
              </p>
              <img
                className="h-auto w-auto mx-auto mt-2 shadow-sm"
                src="/images/user-panel/payment-method.png"
                alt=""
              />
            </div>
            <div>
              <h5 className="border-b w-1/2 pb-1 border-[#FFA525] text-[#FFA525]">
                Step - 11
              </h5>
              <p>
                <span className="font-bold">Review & Rating: </span>{" "}
                Congratulations!! Your ride has been completed. Now you can give
                a review and rating to the driver.
              </p>
              <img
                className="h-auto w-auto mx-auto mt-2 shadow-sm"
                src="/images/user-panel/review-rating.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default TripHistory;
