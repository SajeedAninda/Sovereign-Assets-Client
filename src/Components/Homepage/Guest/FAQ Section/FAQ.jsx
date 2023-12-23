import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Lottie from "lottie-react";
import knowLottie from "../../../../assets/knowLottie.json"

const FAQ = () => {
    return (
        <div className='bg-white'>
            <div>
                <h1 className='text-center text-4xl font-bold pt-8 text-[#05386B]'>Frequently Asked Questions</h1>
                <div class="text-center">
                    <span class="inline-block w-1 h-1 rounded-full bg-[#05386B] ml-1"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-[#05386B] ml-1"></span>
                    <span class="inline-block w-40 h-1 rounded-full bg-[#05386B]"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-[#05386B] ml-1"></span>
                    <span class="inline-block w-1 h-1 rounded-full bg-[#05386B] ml-1"></span>
                </div>
            </div>
            <div className='w-[90%] h-fit mx-auto flex flex-col-reverse md:flex-row gap-4 md:gap-10 justify-between items-center py-8'>
                <div className='flex-1 flex justify-end'>
                    <Lottie animationData={knowLottie} loop={true} />
                </div>
                <div className='flex-1'>
                    <Accordion style={{ backgroundColor: '#ffffff', border: "2px solid #05386B", padding: "8px", marginBottom: '2px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontSize: '24px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>What is an asset management system, and how does it benefit our organization?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '16px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                An asset management system is a digital platform designed to track, monitor, and manage an organization's assets efficiently. It provides real-time insights, improves resource allocation, enhances accountability, and ultimately contributes to increased operational efficiency.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "2px solid #05386B", padding: "8px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontSize: '24px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}> How user-friendly is the asset management system, and will it require extensive training for our team to adapt?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '16px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                Our asset management system is designed with a user-friendly interface, ensuring ease of use for administrators and employees. While comprehensive training materials are available, the intuitive design minimizes the learning curve, allowing users to quickly adapt and utilize its features effectively.</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "2px solid #05386B", padding: "8px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontSize: '24px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>How does the asset management system contribute to cost savings and improved financial management?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '16px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                The system provides accurate insights into asset utilization, maintenance schedules, and depreciation, enabling better financial planning. By optimizing resource allocation and reducing downtime through proactive maintenance, the asset management system contributes to cost savings and improved overall financial management.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "2px solid #05386B", padding: "8px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontSize: '24px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>How does the asset management system handle scalability as our organization grows and acquires more assets?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '16px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                The asset management system is scalable and can easily accommodate the growing needs of your organization. Whether you have a small business or a large enterprise, the system is designed to scale with your requirements, providing flexibility and adaptability to support your evolving asset management needs.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>
        </div>
    );
};

export default FAQ;