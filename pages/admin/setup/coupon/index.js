import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminLayout from '../../../../layout/adminLayout';

const Coupon = () => {
    const [active, setActive] = useState(0)
    const options = [
        {
            label: 'Payment',
            form: (
                <>
                    <p>asdasdasd</p>
                </>
            )
        },
        {
            label: 'Payment Settings',
            form: (
                <>
                    <p>asdasdasd</p>
                </>
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
                                className={`px-4 py-2 text-sm ${active === index ? 'bg-black text-white' : ''}`}
                                role="button" key={index}>
                                {option.label}
                            </div>
                        ))}
                    </div>
                </Col>
                <Col md={9}>
                    <div>
                        <div className="border mb-3 p-2 text-green-500 inline-block mt-12">
                            {options[active].label}
                        </div>

                        <div>
                            {options[active]?.form}
                        </div>

                    </div>

                </Col>
            </Row>
        </AdminLayout>
    );
};

export default Coupon;