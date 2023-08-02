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
          <p>The user can take a ride from here:</p>
          <div className="space-y-16">
            <div>
              <h5 className="border-b w-1/2 pb-1 border-[#FFA525] text-[#FFA525]">
                Step - 1
              </h5>
              <p>
                <span className="font-bold">Allow Location: </span> To take a
                ride you must have to allow your location.
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
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default TripHistory;
