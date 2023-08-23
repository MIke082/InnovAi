import React from 'react';
import './HomeScreen.css';
import AppForm from './AppForm';
import AppNavigation from '../../AppNavigation/AppNavigation';
import mainScreenImg from "../../Images/mainScreen.png";
import { TiFlashOutline } from 'react-icons/ti';
import { AiOutlineArrowRight } from 'react-icons/ai';

const HomeScreen = () => {
    return (
        <>
            <AppNavigation />
            <div className="home-container">
                <div className="content-container">
                    <div className="cover-container">
                        <div className="cover-overlay"></div> {/* Добавляем overlay */}
                        <img
                            src={mainScreenImg}
                            alt="Cover"
                            className="cover-image"
                        />
                    </div>
                    <div className="text-next-to-image">
                        <h1>InnovAi Now you can buy and sell your car safely!</h1>
                        <p>InnovAi provides a safe, transparent platform to trade vehicles in an environment where trust is key.</p>
                    </div>
                    <AppForm />
                </div>


                <div className="protection-section">
                    <div className='protection-title'>
                        <h1>Innovative and Affordable Protection.</h1>
                        <h5>Protect your purchase with InnovAi's industry-leading protection for both buyers and sellers.</h5>
                    </div>
                    <div className="protection-row">
                        <div className="protection-column">
                            <div>
                                <TiFlashOutline className="flash-icon" size="40" color="rgba(93, 93, 255, 0.5)" />
                            </div>

                            <div>
                                <h3>Simple Process.</h3>
                                <p style={{ width: 350, fontSize: 14 }}>The process is easy, we just need the VIN of the car you're buying or selling to determine if it qualifies for our protection plans.</p>
                                <h4 style={{ marginTop: 20 }}>Learn more</h4>
                            </div>
                        </div>
                        <div className="protection-column">
                            <div>
                                <TiFlashOutline className="flash-icon" size="40" color="rgba(93, 93, 255, 0.5)" />
                            </div>
                            <div>
                                <h3>No Risk of Losses or Deposits.</h3>
                                <p style={{ width: 380, fontSize: 14 }}>We guarantee that there will be no losses in funds from either party - seller or buyer - so long as they follow the guidelines set forth in their agreement with us when purchasing insurance coverage on a vehicle through InnovAi.</p>
                                <h4>Learn more</h4>
                            </div>
                        </div>
                    </div>
                    <div className="protection-row">
                        <div className="protection-column">
                            <div>
                                <TiFlashOutline className="flash-icon" size="40" color="rgba(93, 93, 255, 0.5)" />
                            </div>
                            <div>
                                <h3>Easy transactions & payments.</h3>
                                <p style={{ width: 350, fontSize: 14 }}>No more hassles with cash or banks - we make it easy for you!</p>
                                <h4>Learn more</h4>
                            </div>
                        </div>
                        <div className="protection-column">
                            <div>
                                <TiFlashOutline className="flash-icon" size="40" color="rgba(93, 93, 255, 0.5)" />
                            </div>
                            <div>
                                <h3>The safest place for your money.</h3>
                                <p style={{ width: 380, fontSize: 14 }}>We use state-of-the-art security systems with multiple levels of encryption on our platform as well as fraud detection tools that work 24/7/365.</p>
                                <h4>Learn more</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='about-container'>
                <h1>InnovAi.</h1>
                <p>InnovAi offers protection while buying and selling cars to both parties, the buyer will transfer the money to a wallet, and if the money is in the wallet the app will transfer ownership of car.</p>
            </div>

            <div className='info-container'>
                
                <div>
                    <TiFlashOutline className="flash-icon-info" size="40" color="rgba(93, 93, 255, 0.5)" />
                    <h2>Download app from Google Play or App Store.</h2>
                    <p>You'll be guided through 3 easy steps for your purchase or sale.</p>
                    <h4>Learn more</h4>
                </div>
                <div>
                    <AiOutlineArrowRight className="arrow-icon" size="40" color="rgba(93, 93, 255, 0.5)" />
                </div>
                <div style={{marginTop: 40}}>
                    <TiFlashOutline className="flash-icon-info" size="40" color="rgba(93, 93, 255, 0.5)" />
                    <h2>Transfer funds into our secure account</h2>
                    <p>Funds are deposited in an escrow account until you receive confirmation that it's been received by seller/buyer on other end.</p>
                    <h4>Learn more</h4>
                </div>
                <div>
                    <AiOutlineArrowRight className="arrow-icon" size="40" color="rgba(93, 93, 255, 0.5)" />
                </div>
                <div>
                    <TiFlashOutline className="flash-icon-info" size="40" color="rgba(93, 93, 255, 0.5)" />
                    <h2>Transaction complete!</h2>
                    <p>Once funds have cleared with bank (usually 24 hours), we'll release funds back to you once transaction has completed</p>
                    <h4>Learn more</h4>
                </div>

            </div>
        </>
    );
};

export default HomeScreen;
