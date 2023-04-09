import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminLayout from '../../../../layout/adminLayout';
import Category from './category';
import FareManagement from './fare-management';
import Package from './package';
import Service from './service';
import ServiceBrand from './service-brand';
import ServiceLocation from './service-location';
import ServiceVehicle from './service-vehicle';

const ServiceManagement = () => {
    const [active, setActive] = useState(0)
    const options = [
        {
            label: 'Category',
            form: (
                <div>
                    <Category />
                </div>
            )
        },
        {
            label: 'Packages',
            form: (
                <div>
                    <Package />
                </div>
            )
        },
        {
            label: 'Services',
            form: (
                <div>
                    <Service />
                </div>
            )
        },
        {
            label: 'Services Vehicles',
            form: (
                <div>
                <ServiceVehicle />
            </div>
            )
        },
        {
            label: 'Service Brands',
            form: (
                <div>
                    <ServiceBrand />
                </div>
            )
        },
        {
            label: 'Service Location',
            form: (
                <div>
                    <ServiceLocation />
                </div>
            )
        },
        {
            label: 'Fare Management',
            form: (
                <div>
                    <FareManagement />
                </div>
            )
        },
    ]


    return (
        <AdminLayout>
            <Row>
                <Col md={3}>
                    <div className="bg-white rounded overflow-hidden shadow-sm md:mx-10 mt-12">
                        {options?.map((option, index) => (
                            <div
                                onClick={() => setActive(index)}
                                className={`px-4 py-2 text-sm ${active === index ? 'bg-amber-500 text-white' : 'border-b'}`}
                                role="button" key={index}>
                                {option.label}
                            </div>
                        ))}
                    </div>
                </Col>
                <Col md={9}>
                    <div>
                        <div className="border mb-3 py-2 px-4 text-green-500 inline-block mt-12">
                            {options[active].label}
                        </div>
                        <div className='mr-5'>
                            {options[active]?.form}
                        </div>
                    </div>

                </Col>
            </Row>
        </AdminLayout>
    );
};

export default ServiceManagement;