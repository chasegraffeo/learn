import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'

const StateCards = () => {
    const [mdShowAL, setmdShowAL] = useState(false);
    const [mdShowAK, setmdShowAK] = useState(false);
    const [mdShowAZ, setmdShowAZ] = useState(false);
    const [mdShowAR, setmdShowAR] = useState(false);
    const [mdShowCA, setmdShowCA] = useState(false);
    const [mdShowCO, setmdShowCO] = useState(false);
    const [mdShowCT, setmdShowCT] = useState(false);
    const [mdShowDE, setmdShowDE] = useState(false);
    const [mdShowFL, setmdShowFL] = useState(false);
    const [mdShowGA, setmdShowGA] = useState(false);
    const [mdShowHI, setmdShowHI] = useState(false);
    const [mdShowID, setmdShowID] = useState(false);
    const [mdShowIL, setmdShowIL] = useState(false);
    const [mdShowIN, setmdShowIN] = useState(false);
    const [mdShowIA, setmdShowIA] = useState(false);
    const [mdShowKS, setmdShowKS] = useState(false);
    const [mdShowKY, setmdShowKY] = useState(false);
    const [mdShowLA, setmdShowLA] = useState(false);
    const [mdShowME, setmdShowME] = useState(false);
    const [mdShowMD, setmdShowMD] = useState(false);
    const [mdShowMA, setmdShowMA] = useState(false);
    const [mdShowMI, setmdShowMI] = useState(false);
    const [mdShowMN, setmdShowMN] = useState(false);
    const [mdShowMS, setmdShowMS] = useState(false);
    const [mdShowMO, setmdShowMO] = useState(false);
    const [mdShowMT, setmdShowMT] = useState(false);
    const [mdShowNE, setmdShowNE] = useState(false);
    const [mdShowNV, setmdShowNV] = useState(false);
    const [mdShowNH, setmdShowNH] = useState(false);
    const [mdShowNJ, setmdShowNJ] = useState(false);
    const [mdShowNM, setmdShowNM] = useState(false);
    const [mdShowNY, setmdShowNY] = useState(false);
    const [mdShowNC, setmdShowNC] = useState(false);
    const [mdShowND, setmdShowND] = useState(false);
    const [mdShowOH, setmdShowOH] = useState(false);
    const [mdShowOK, setmdShowOK] = useState(false);
    const [mdShowOR, setmdShowOR] = useState(false);
    const [mdShowPA, setmdShowPA] = useState(false);
    const [mdShowRI, setmdShowRI] = useState(false);
    const [mdShowSC, setmdShowSC] = useState(false);
    const [mdShowSD, setmdShowSD] = useState(false);
    const [mdShowTN, setmdShowTN] = useState(false);
    const [mdShowTX, setmdShowTX] = useState(false);
    const [mdShowUT, setmdShowUT] = useState(false);
    const [mdShowVT, setmdShowVT] = useState(false);
    const [mdShowVA, setmdShowVA] = useState(false);
    const [mdShowWA, setmdShowWA] = useState(false);
    const [mdShowWV, setmdShowWV] = useState(false);
    const [mdShowWI, setmdShowWI] = useState(false);
    const [mdShowWY, setmdShowWY] = useState(false);



    return (

        <Container className="main row d-flex justify-content-center m-auto p-10" style={{ width: '100rem' }}>

            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147675/isolated/preview/3db339fd0ae12cb494ef2c41249c0c28-alabama-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowAL(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowAL}
                onHide={() => setmdShowAL(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="AL">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Alabama (AL)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/2560px-Flag_of_Alabama.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Alabama.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.aces.edu/wp-content/uploads/2019/02/shutterstock_611375129-2.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Alabama is the Camellia.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://mrdehnefourthgradeclassalabama.weebly.com/uploads/1/1/7/6/117631801/longleafpine1_orig.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Alabama is the Southern Longleaf Pine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/NorthernFlickerMaleALbirdsymbol.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Alabama is the Yellowhammer.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>

            {/* end alabama*/}



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147677/isolated/preview/94de1721666d0ff4f6445ac0dd11d764-alaska-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowAK(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowAK}
                onHide={() => setmdShowAK(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="AK">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Alaska (AK)</h3></Modal.Body>




                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '43rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/1920px-Flag_of_Alaska.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Alaska.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/3/0/CI_Ball_Horticulture_4x3_Myosotis_sylvatica_Mon_Amie_Mix_Bloom_24793.jpg.rend.hgtvcom.1280.960.suffix/1583152492992.jpeg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Alaska is the Forget-me-not.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.alaska.org/assets/content/cache/made/assets/content/advice/Alaska_Species_Guide/Tree%20Species/580_387_c1/Sitka_SpruceSitkaSpruce.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Alaska is the Sitka Spruce.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Lagopus_lagopus_-_adult_%28Denali%2C_2010%29.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Alaska is the Willow Ptarmigan.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>
            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src=" https://images.vexels.com/media/users/3/147680/isolated/preview/cc9969a4d2a3ee79d59317cb9351a47d-arizona-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowAZ(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowAZ}
                onHide={() => setmdShowAZ(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="AK">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Arizona (AZ)</h3></Modal.Body>




                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/1599px-Flag_of_Arizona.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Arizona.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.nps.gov/sagu/getinvolved/images/Photo-1-Saguaro-flowers-and-buds-T-Foley.jpg?maxwidth=1200&autorotate=false" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Arizona is the Saguaro Cactus.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn2.hubspot.net/hubfs/1546852/AAA%20Social%202019/palo%20verde%20landscape%20AZ.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Arizona is the Palo Verde.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn.mos.cms.futurecdn.net/Yuh2DryHnoVRB3ZsB2hxpk-1200-80.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Arizona is the Cactus Wren.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>
            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src=" https://images.vexels.com/media/users/3/147682/isolated/preview/1b5e92d1fb0706466541c0372ed49c26-arkansas-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowAR(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowAR}
                onHide={() => setmdShowAR(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="AR">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Arkansas (AR)</h3></Modal.Body>
                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/1200px-Flag_of_Arkansas.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Arkansas.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Apple_blossom_02B.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Arkansas is the Apple Blossom.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2015/04/white-pine.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Arkansas is the Pine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.allaboutbirds.org/guide/assets/og/75712191-1200px.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Arkansas is the Mockingbird.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>
            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147702/isolated/preview/2095f15fc1d24a7e474b47109ce3fd97-california-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowCA(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowCA}
                onHide={() => setmdShowCA(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="CA">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: California (CA)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/1200px-Flag_of_California.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of California.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}

                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/golden-poppy-square-saija-lehtonen.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of California is the Golden Poppy.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.tripsavvy.com/thmb/QaQy6Yq1MVQYj_B4hrHDN7z2tIs=/2121x1414/filters:fill(auto,1)/SequoiatreeinYosemitePark-5bc6aca44cedfd0026930ea8.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of California is the California Redwood.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://live.staticflickr.com/4542/26517504769_b09ea93357_b.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of California is the California Valley Quail.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>
            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147737/isolated/preview/cd95c483d08cb8b067e1b32c654a633a-colorado-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowCO(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowCO}
                onHide={() => setmdShowCO(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="CO">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Colorado (CO)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg/2650px-Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Colorado.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.pinimg.com/originals/3a/af/22/3aaf2265c792c0e9f4c5e75407c7c182.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Colorado is the Rocky Mountain Columbine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn.shopify.com/s/files/1/0947/8766/products/12_d024af9c-fadc-4f2b-a9d9-7e8f7da86fb1.jpeg?v=1512518046" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Colorado is the Blue Pruce.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.thespruce.com/thmb/rm6XHF0EfQ_zM-867ENKJyPTcNw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/colorado-bird-58963e915f9b5874ee498360.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Colorado is the Lark Bunting.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src=" https://images.vexels.com/media/users/3/147742/isolated/preview/c10422c88250670b51f7fab5c587ea1f-connecticut-state-plain-map-by-vexels.png
" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowCT(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowCT}
                onHide={() => setmdShowCT(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="CT">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Connecticut (CT)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/1200px-Flag_of_Connecticut.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Connecticut.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://live.staticflickr.com/55/179861099_f676600670_b.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Connecticut is the Mountain Laurel.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Connecticut is the White Oak.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://audubonportland.org/wp-content/uploads/2019/01/American-Robin-5D3_8701_filtered-SC.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Connecticut is the American Robin.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147747/isolated/preview/4f0a6fa02d31d7f2d7114630b83a6186-delaware-state-plain-map-by-vexels.png
" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowDE(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowDE}
                onHide={() => setmdShowDE(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="DE">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Delaware (DE)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/1200px-Flag_of_Delaware.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Delaware.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/peachblossomspeachflowers.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Delaware is the Apple Blossom.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/Holly-Berries.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Delware is the American Holly.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.backyardchickens.com/reviews/blue-hen-of-delaware.10845/cover-image" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Delaware is the Delaware Blue Hen.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147768/isolated/preview/7d2520e0b7c496da9bdd00373a3170cb-florida-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowFL(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowFL}
                onHide={() => setmdShowFL(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="FL">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Florida (FL)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/1200px-Flag_of_Florida.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Florida.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.familyhandyman.com/wp-content/uploads/2019/06/shutterstock_256959421-Flower.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Florida is the Orange Blossom.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Spalmetto2.JPG/1200px-Spalmetto2.JPG" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Florida is the Sabal Palm.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i1.wp.com/einfon.com/wp-content/uploads/2019/05/State-Bird-Of-Florida.jpg?fit=945%2C531&ssl=1" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Florida is the Northern Mockingbird.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147779/isolated/preview/bd1cceb587c3df66bbc272f6ae4abbf2-georgia-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowGA(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowGA}
                onHide={() => setmdShowGA(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="GA">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Georgia (GA)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/1200px-Flag_of_Georgia_%28U.S._state%29.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Georgia.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/CherokeeRoseFlower.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Georgia is the Cherokee Rose.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/The_Big_Oak.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Georgia is the Live Oak.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://einfon.com/wp-content/uploads/2019/05/State-Bird-Of-Georgia.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Georgia is the Brown Thrasher.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147789/isolated/preview/ba1098fdab68b5315a4a79ff2e5dedfe-hawaii-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowHI(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowHI}
                onHide={() => setmdShowHI(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="HI">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Hawaii (HI)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/250px-Flag_of_Hawaii.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Hawaii.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://traveltoparadise.com/wp-content/uploads/2018/03/Hibiscus-720x380.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Hawaii is the Yellow Hibiscus.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/KukuitreeAleuritesmoluccana.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Hawaii is the Candlenut Tree</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/32/7f/af/shutterstock-346387145.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Hawaii is the Nene.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147811/isolated/preview/141e96fb35bbc618a0b2f48308f4427a-idaho-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowID(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowID}
                onHide={() => setmdShowID(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="ID">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Idaho (ID)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/1200px-Flag_of_Idaho.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Idaho.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.proplants.com/blog/wp-content/uploads/2012/08/idaho-hero.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Idaho is the Syringa.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://mtc.farm/wp-content/uploads/2018/01/western-white-pine-tree.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Idaho is the Western White Pine</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/symbol-place-images/mountainbluebirdonpine2.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Idaho is the Mountain Bluebird.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147813/isolated/preview/5988bedc8ec7b42d0d999d3c0dc350cd-illionois-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowIL(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowIL}
                onHide={() => setmdShowIL(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="IL">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Illinois (IL)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/1200px-Flag_of_Illinois.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Illinois.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.pinimg.com/originals/4c/13/d6/4c13d62d9437ce6d3dac87d6e7b3ce15.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Illinois is the Violet.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn11.bigcommerce.com/s-999jbj41m8/products/161/images/2929/swamp_white_oak__06607.1509382312.1280.1280__93452.1514168717.1280.1280.jpg?c=2" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Illinois is the White Oak</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/northerncardinalbird-7.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Illinois is the Northern Cardinal.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147816/isolated/preview/371651d9731cca71b710ee10add076cc-indiana-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowIN(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowIN}
                onHide={() => setmdShowIN(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="IN">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Indiana (IN)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/1200px-Flag_of_Indiana.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Indiana.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.gannett-cdn.com/-mm-/72d7a379e79c1e2d3c2cb6f4c6c56235a664d809/c=0-373-4032-2651/local/-/media/2017/05/19/INGroup/Indianapolis/636308061642087706-peony.jpg?width=3200&height=1680&fit=crop" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Indiana is the Peony.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://1.bp.blogspot.com/-NsYe-KaNaaQ/XPpKswwekbI/AAAAAAAAjNY/txG22tuyO3wC7fIUIUZLoah9jKM-PO_CwCLcBGAs/s1600/DSCF4417.JPG" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Indiana is the Tulip Poplar</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.wthr.com/sites/default/files/styles/article_image/public/images/2016/05/21/10609549_G.jpg?itok=FMlnfQ9C" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Indiana is the Cardinal.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147823/isolated/preview/1666aa2c3c0f773154fbde2ec2af141a-iowa-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowIA(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowIA}
                onHide={() => setmdShowIA(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="IA">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Iowa (IA)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/1200px-Flag_of_Iowa.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Indiana.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.proplants.com/blog/wp-content/uploads/2012/08/iowa-hero.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Iowa is the Wild Rose.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.thetreefarm.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/u/bur_oak_quercus_macrocarpa.png" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Iowa is the Bur Oak</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://einfon.com/wp-content/uploads/2019/03/State-Animal-Iowa.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Iowa is the American Goldfinch.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147827/isolated/preview/e4a5f81b7bdf6a7fb20f0599bf61b9f2-kansas-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowKS(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowKS}
                onHide={() => setmdShowKS(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="KS">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Kansas (KS)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/1200px-Flag_of_Kansas.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Kansas.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/symbol-place-images/PerfectSunflower.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Kansas is the Wild Sunflower.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.homestratosphere.com/wp-content/uploads/2019/05/Cottonwood-Trees-1-27-5.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Kansas is the Aigeiros</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://einfon.com/wp-content/uploads/2019/06/State-Bird-Of-Kansas.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Kansas is the Western Meadowlark.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src=" https://images.vexels.com/media/users/3/147829/isolated/preview/8491a9e473ce16b0cbfc6438eb22cf6b-kentucky-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowKY(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowKY}
                onHide={() => setmdShowKY(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="KY">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Kentucky (KY)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/1200px-Flag_of_Kentucky.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Kentucky.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/stateflowergoldenrod-bloom.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Kentucky is the Goldenrod.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.pinimg.com/originals/de/2c/b8/de2cb809859ddd403d37d151e46d0e6b.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Kentucky is the Tulip Tree</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/34695420214_ce86aa8b89_o.jpg?crop=0,0,2955,1846&wid=1640&hei=1025&scl=1.8018292682926829" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Kentucky is the Northern Cardinal.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://static.wixstatic.com/media/b5a7b9_034c0c6e17ab45bd9f91ab9e1a5c1eee~mv2.png/v1/fill/w_506,h_508,al_c,q_85,usm_0.66_1.00_0.01/lousiana-state-plain-map-by-Vexels.webp" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowLA(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowLA}
                onHide={() => setmdShowLA(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="LA">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Louisiana (LA)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/250px-Flag_of_Louisiana.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Louisiana.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://1.bp.blogspot.com/-5LLSH1jZn5A/UJx7akoKu_I/AAAAAAAANiU/kxn34hTfkb0/s1600/Southern+Magnolia+Flower+Wallpapers+01.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Louisiana is the Magnolia.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn.britannica.com/14/74914-050-03E81BCE/cypresses-swamp.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Louisiana is the Bald Cypress</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/7/79/Brown_pelican_-_natures_pics.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Kentucky is the Brown Pelican.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>


            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147838/isolated/preview/06d52e19429f8b9ed83a7c5d72a0b096-maine-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowME(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowME}
                onHide={() => setmdShowME(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="ME">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Maine (ME)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/1200px-Flag_of_Maine.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Maine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.maine.gov/sos/kids/themes/kids/images/pinecone-tassel.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Maine is the White Pine Cone.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/whitepinemalecones.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Maine is the White Pine</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://townsquare.media/site/696/files/2019/02/Chickadee.jpg?w=980&q=75" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Maine is the Black-capped Chickadee.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147841/isolated/preview/660fe800f099cc70f2971a3537518f6b-maryland-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowMD(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowMD}
                onHide={() => setmdShowMD(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="MD">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Maryland (MD)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/1200px-Flag_of_Maryland.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Maryland.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/6d/e5/d9/shutterstock-614578205.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Maryland is the Black-Eyed Susan.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://blog.davey.com/media/984429/white_oak-aug.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Maryland is the White Oak</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.allaboutbirds.org/guide/assets/og/75258971-1200px.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Maryland is the Baltimore Oriole.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147843/isolated/preview/cacc49bbbc348eae7c5d81845c5a9ade-massachusetts-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowMA(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowMA}
                onHide={() => setmdShowMA(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="MA">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Massachusetts (MA)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/1200px-Flag_of_Massachusetts.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Massachusetts.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://amc-nh.org/resources/guides/wildflowers/images/Epigaea%20repens_Trailing%20Arbutus,%20Mayflower_primary_1_NH_20110514_Beth%20Zimmer_Trailing%20Arbutus%2001.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Massachusetts is the Trailing arbutus.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn11.bigcommerce.com/s-f74ff/products/10228/images/26849/american-elm-1a__89057.1538766773.1280.1280.jpg?c=2" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Massachusetts is the American Elm.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.insider.com/5c1d361901c0ea4775113172?width=1300&format=jpeg&auto=webp" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Massachusetts is the Black-capped Chickadee.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>


            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147862/isolated/preview/841888f612a656194a434673f7c19b2d-michigan-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowMI(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowMI}
                onHide={() => setmdShowMI(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="MI">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Michigan (MI)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/1200px-Flag_of_Michigan.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Michigan.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.pinimg.com/originals/e3/eb/ee/e3ebee4b792797eb265e57c68be3c6a4.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Michigan is the Apple Blossom.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn10.bigcommerce.com/s-qxoddz/products/6034/images/13230/Pinus_strobus_Coney_Island_1__62675.1444352230.1280.1280.JPG?c=2" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Michigan is the Eastern White Pine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Turdus-migratorius-002.jpg/1200px-Turdus-migratorius-002.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Michigan is the American Robin.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147864/isolated/preview/9ed8c13484ad4605c2c57ab53599fb12-minnesota-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowMN(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowMN}
                onHide={() => setmdShowMN(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="MN">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Minnesota (MN)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/1200px-Flag_of_Minnesota.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Minnesota.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.brainerddispatch.com/incoming/article2789623.ece/alternates/BASE_LANDSCAPE/Showy%20Lady%20Slippers%20bloom%20Monday%20in%20the%20Northland%20Arboretum%20in%20Brainerd.%20Named%20Minnesota%27s%20state%20flower%20in%201902%2C%20the%20orchid%20is%20a%20sure%20sign%20of%20the%20first%20days%20of%20summer.%20%28Brainerd%20DispatchSteve%20Kohls%29" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Minnesota is the Showy lady's slippers.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.mountroyalseeds.com/wp-content/uploads/2016/10/Pinus-resinosa_3-640x427.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Minnesota is the Red Pine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://natgeo.imgix.net/subject%20-%20common%20loon.jpg?auto=compress,format&w=1920&h=960&fit=crop" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Minnesota is the Common Loon.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147866/isolated/preview/ab81916269340d5a3c57f5e19a5bee9a-mississippi-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowMS(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowMS}
                onHide={() => setmdShowMS(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="MS">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Mississippi (MS)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Mississippi.svg/1200px-Flag_of_Mississippi.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Mississippi.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/3/21/0/shutterstock_470399975_Nikolay-Kurzenko_magnolia-tree.jpg.rend.hgtvcom.1280.853.suffix/1521649756129.jpeg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Mississippi is the Magnolia.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pink-magnolia-tree-bloom-george-oze.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Mississippi is the Magnolia Tree.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/northernmockingbird-statebird.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Mississippi is the Mockingbird.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147868/isolated/preview/dea8c8b50126b81c6d81e16ddee4d283-missouri-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowMO(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowMO}
                onHide={() => setmdShowMO(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="MO">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Missouri (MO)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/250px-Flag_of_Missouri.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Missouri.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://michiganflora.net/species_images/l/96383.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Missouri is the Dotted Hawthorn.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://bloximages.newyork1.vip.townnews.com/news-journal.com/content/tncms/assets/v3/editorial/c/1c/c1c60d22-5490-11e9-a5a2-578c25751ce2/5ca22aaf7058c.image.jpg?resize=1200%2C801" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Missouri is the Flowering Dogwood.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.thespruce.com/thmb/j98QDX59fMG3f95V9E3i6X4sdFg=/1500x1000/filters:fill(auto,1)/eastern-bluebird-58f8c8ba3df78ca15978a2be.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Missouri is the Eastern Bluebird.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147870/isolated/preview/8bf6a50937ffe20afb38d9a16cb070a5-montana-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowMT(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowMT}
                onHide={() => setmdShowMT(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="MT">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Montana (MT)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/1200px-Flag_of_Montana.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Montana.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.mtpr.org/sites/kufm/files/styles/x_large/public/201805/Bitterroot-flowers_USFS.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Montana is the Bitterroot.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://arbordayblog.org/wp-content/uploads/2016/12/ponderosa-pine-1080x608.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Montana is the Ponderosa pine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.allaboutbirds.org/guide/assets/og/75224621-1200px.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Montana is the Western Meadowlark.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147877/isolated/preview/b48080aab7487fb0175a4f037a67571f-nebraska-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowNE(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowNE}
                onHide={() => setmdShowNE(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="NE">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Nebraska (NE)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/1200px-Flag_of_Nebraska.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Nebraska.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.proplants.com/blog/wp-content/uploads/2012/08/nebraska-hero.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Nebraska is the Solidago.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://magazine.outdoornebraska.gov/wp-content/uploads/2017/03/cottoncottonwood-1024x678.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Nebraska is the Eastern Cottonwood.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://download.ams.birds.cornell.edu/api/v1/asset/67377581/1800" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Nebraska is the Western Meadowlark.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147879/isolated/preview/68a112f40c06288eaa13dd653ad5a097-nevada-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowNV(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowNV}
                onHide={() => setmdShowNV(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="NV">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Nevada (NV)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/1200px-Flag_of_Nevada.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Nevada.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/52/ce/a9/shutterstock-1092723545.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Nevada is the Sagebrush.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://mavensphotoblog.com/wp-content/uploads/2013/03/Bristlecone-Pine-Forest-Aug-2012-42-768x512.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Nevada is the Bristlecone Pine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://nevadamagazine.com/wp-content/uploads/NevadaMagazineMA17_Page_26_Image_0011-Copy-e1526490726166.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Nevada is the Mountain Bluebird.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147881/isolated/preview/55b455d6d3900eeeda2ecdc5251773bd-new-hampshire-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowNH(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowNH}
                onHide={() => setmdShowNH(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="NH">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: New Hampshire (NH)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/1200px-Flag_of_New_Hampshire.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of New Hampshire.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.wallpapers13.com/wp-content/uploads/2015/12/New_hampshire_state_flower_purple_lilac_29.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of New Hampshire is the Purple Lilac.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://previews.123rf.com/images/kellyvandellen/kellyvandellen1712/kellyvandellen171200238/92554511-forest-of-white-paper-birch-tree-trunks-with-golden-leaves-in-autumn.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of New Hampshire is the Paper Birch.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/Purple_Finch_CORRECT_0.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of New Hampshire is the Purple Finch.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147883/isolated/preview/494c0678b4401d1fbaaac3d1434d0b39-new-jersey-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowNJ(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowNJ}
                onHide={() => setmdShowNJ(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="NJ">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: New Jersey (NJ)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/1200px-Flag_of_New_Jersey.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of New Jersey.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.proplants.com/blog/wp-content/uploads/2012/08/new-jersey-hero.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of New Jersey is the Common Blue Violet.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/Northernredoakautumnleaves.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of New Jersey is the Northern Red Oak.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.state.nj.us/nj/library/about/facts_bird.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of New Jersey is the Eastern Goldfinch.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src=" https://images.vexels.com/media/users/3/147885/isolated/preview/6528444cbf046a6dc71d66c040633b49-new-mexico-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowNM(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowNM}
                onHide={() => setmdShowNM(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="NM">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: New Mexico (NM)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_New_Mexico.svg/1200px-Flag_of_New_Mexico.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of New Mexico.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.floraqueen.com/blog/wp-content/uploads/2020/03/shutterstock_786068701.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of New Mexico is the Yuuca.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://4.bp.blogspot.com/-MZMJkMUc7ks/VTVWZJZEqNI/AAAAAAAAK9s/By4k0QD2kAw/s1600/dreampine.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of New Mexico is the Pinyon pine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.birdlist.org/checklists_of_the_birds_of_the_united_states/new_mexico_state_bird_roadrunner.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of New Mexico is the Great Roadrunner.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>





            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src=" https://images.vexels.com/media/users/3/147887/isolated/preview/9851e1dc011aadd344b19faaf4ff1275-new-york-state-plain-map-by-vexels.pngplain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowNY(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowNY}
                onHide={() => setmdShowNY(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="NY">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: New York (NY)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/1200px-Flag_of_New_York.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of New York.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/redrosebeautystateflowerNY.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of New York is the Rose.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/SugarMapleTreesAutumn.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of New York is the Sugar Maple.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.borealbirds.org/sites/default/files/bird_images/eastern-bluebird.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of New York is the Eastern Bluebird.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147890/isolated/preview/a650eb6c621778667d56a866de8813ae-north-carolina-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowNC(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowNC}
                onHide={() => setmdShowNC(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="NC">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: North Carolina (NC)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_North_Carolina.svg/1200px-Flag_of_North_Carolina.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of North Carolina.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://d3m7xw68ay40x8.cloudfront.net/assets/2017/03/28121450/great-eight-april-2017.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of North Carolina is the Dogwood.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.tripsavvy.com/thmb/54R-yXnqbenyXMnoYVnXZ1HKwCw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-103787047-594b2df45f9b58f0fc18e282.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of North Carolina is the Longleaf Pine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://usercontent2.hubstatic.com/4513579_f1024.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of North Carolina is the Cardinal.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147892/isolated/preview/85d68dd029c4b5d2c9959ef22b896d74-north-dakota-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowND(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowND}
                onHide={() => setmdShowND(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="ND">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: North Dakota (ND)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/1200px-Flag_of_North_Dakota.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of North Dakota.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.pinimg.com/originals/b4/73/5d/b4735de42c13b93db0b1a0451b9be936.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of North Dakota is the Wild Prairie Rose.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn11.bigcommerce.com/s-f74ff/products/10228/images/26849/american-elm-1a__89057.1538766773.1280.1280.jpg?c=2" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of North Dakota is the American Elm.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.curriculumvisions.com/statesStudiesGallery/northDakota/northDakotaBird.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of North Dakota is the Western Meadowlark.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147894/isolated/preview/e79deba6e1ae74178abc81a86d4c787b-ohio-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowOH(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowOH}
                onHide={() => setmdShowOH(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="OH">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Ohio (OH)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ohio.svg/1200px-Flag_of_Ohio.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Ohio.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/45/2e/d8/shutterstock-139088519.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Ohio is the Red Carnation.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/OhioBuckeyeStateTree_0.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Ohio is the Ohio Buckeye.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/cardinalnortherncardinalbird.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Ohio is the Northern Cardinal.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147896/isolated/preview/2f3d02bbef72894b97817a1a481e32a9-oklahoma-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowOK(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowOK}
                onHide={() => setmdShowOK(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="OK">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Oklahoma (OK)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Oklahoma.svg/1200px-Flag_of_Oklahoma.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Oklahoma.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/59/cf/5d/shutterstock-705958024.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Oklahoma is the Oklahoma Rose.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.pinimg.com/originals/a9/23/86/a92386c7c31d5645041f3e3aa9632e47.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Oklahoma is the Red Bud.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/scissor-tailedflycatcherflight.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Oklahoma is the Scissor-Tailed FLycatcher.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147898/isolated/preview/18f830e79fd9e32061dd26abaf196d9a-oregon-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowOR(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowOR}
                onHide={() => setmdShowOR(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="OR">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Oregon (OR)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/1200px-Flag_of_Oregon.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Massachusetts.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/45/c6/51/shutterstock-137658668.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Oregon is the Oregon Grape.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/DouglasFirPinecones1.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Oregon is the Douglas Fir.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.gannett-cdn.com/-mm-/280a07dc791af58f49bf009e46c9b3a7a8324fdd/c=349-248-1459-1083/local/-/media/2017/02/27/Salem/Salem/636238017767546409-GettyImages-178624843-1-.jpg?width=512&height=384" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Oregon is the Western Meadowlark.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147908/isolated/preview/87ff4cbda7a90d0dd79e1f97180e029e-pennsylvania-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowPA(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowPA}
                onHide={() => setmdShowPA(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="PA">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Pennsylvania (PA)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/1200px-Flag_of_Pennsylvania.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Pennsylvania.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/5a/ee/95/mountain-laurel-pennsylvania-state-flower.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Pennsylvania is the Mountain Laurel.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.steintree.com/wp-content/uploads/2018/10/eastern-hemlock-pennsylvania-state-tree-tree-care-Stein-1000.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Pennsylvania is the Eastern Hemlock.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/Ruffed-grouse-PA-statebird.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Pennsylvania is the Ruffed Grouse.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147941/isolated/preview/0498bcb83d3e4c35ba46c240ab2b16ee-rhode-island-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowRI(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowRI}
                onHide={() => setmdShowRI(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="RI">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Rhode Island (RI)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Rhode_Island.svg/1200px-Flag_of_Rhode_Island.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Rhode Island.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/violetsflowers.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Rhode Island is the Violet.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://theoceanstate.weebly.com/uploads/1/0/1/2/101213464/10992880993-e0da298a40-b_orig.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Rhode Island is the Red Maple.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.rimonthly.com/content/uploads/2018/06/Rhode-Island-Red.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Rhode Island is the Rhode Island Red.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/148061/isolated/preview/35136a65446f387e2c04035298927fbc-south-carolina-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowSC(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowSC}
                onHide={() => setmdShowSC(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="SC">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: South Carolina (SC)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_South_Carolina.svg/1200px-Flag_of_South_Carolina.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of South Carolina.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/3f/44/00/shutterstock-254285581.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of South Carolina is the Yellow Jessamine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Spalmetto2.JPG/1200px-Spalmetto2.JPG" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of South Carolina is the Sabel Palmetto.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.hiltonhead.com/wp-content/uploads/bird-1398379_640.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of South Carolina is the Carolina Wren.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/148063/isolated/preview/ca3ae3592469b8427ecef86e0e9dab6d-south-dakota-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowSD(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowSD}
                onHide={() => setmdShowSD(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="SD">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: South Dakota (SD)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/1200px-Flag_of_South_Dakota.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of South Dakota.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/symbol-place-images/Pasqueflower-01.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of South Dakota is the Pasque Flower.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://sdda.sd.gov/images/2011-blackhills-spruce-needles.jpeg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of South Dakota is the White Spruce.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/6/68/Pheasant.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of South Dakota is the Ring-Necked Pheasant.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>





            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/148076/isolated/preview/2ea5c6d7f77bc1c9244d9ed2fe64e8ad-tennessee-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowTN(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowTN}
                onHide={() => setmdShowTN(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="TN">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Tennessee (TN)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tennessee.svg/1200px-Flag_of_Tennessee.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Tennessee.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.proplants.com/blog/wp-content/uploads/2012/08/tennessee-hero.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Tennessee is the Iris.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/LiriodendronTulipifera-Tuliptree.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Tennessee is the Tulip Poplar.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.pinimg.com/originals/87/11/d7/8711d72739ade1d3c3bae142a299a85b.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Tennessee is the Northern Mockingbird.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>





            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/148078/isolated/preview/b0760d30d1b6ed2ce52f50d0d48191c8-texas-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowTX(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowTX}
                onHide={() => setmdShowTX(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="TX">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Texas (TX)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/1200px-Flag_of_Texas.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Texas.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://live.staticflickr.com/3394/4564383037_90a8c1df22_b.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Texas is the Blue Bonnet.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.atoztheusa.com/state_images/Nature/TX/S-TX-tree3.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Texas is the Pecan Tree.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/ee/7e/1f/shutterstock-1104888590.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Texas is the Northern Mockingbird.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>





            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/148101/isolated/preview/96218785ed0e91f15b8ed3b050e90742-utah-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowUT(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowUT}
                onHide={() => setmdShowUT(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="UT">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Utah (UT)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Utah.svg/1200px-Flag_of_Utah.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Utah.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/07/72/aa/shutterstock-435813361.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Utah is the Sego Lilly.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn.vox-cdn.com/thumbor/Cd18fViuPzxqdAyfCeqk8MbVnj8=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/64513074/1298221.0.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Utah is the Quaking Aspen.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/LarusCalifornicus.jpg/1200px-LarusCalifornicus.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Utah is the California Gull.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src=" https://images.vexels.com/media/users/3/148104/isolated/preview/e6ee61fc7df9b3bbd0ea5ff60a0052da-vermont-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowVT(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowVT}
                onHide={() => setmdShowVT(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="VT">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Vermont (VT)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/1200px-Flag_of_Vermont.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Vermont.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.proplants.com/blog/wp-content/uploads/2012/08/vermont-hero.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Vermont is the Red Clover.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/SugarMapleTreesAutumn.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Vermont is the Sugar Maple.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://1471793142.rsc.cdn77.org/data/images/full/7382/hermit-thrush.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Vermont is the Hermit Thrush.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/148107/isolated/preview/d3fe3a3cc5ef87f6734cd0d8731fe34f-virginia-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowVA(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowVA}
                onHide={() => setmdShowVA(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="VA">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Virginia (VA)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Virginia.svg/1200px-Flag_of_Virginia.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Massachusetts.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/rhododendronWVstateflower.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Virginia is the Flowering Dogwood.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/floweringDogwoodSpring.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Virginia is the Flowering Dogwood.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.pinimg.com/originals/c3/56/49/c35649e62a93454a0ea72650b89110f9.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Virginia is the Cardinal.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>





            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/148109/isolated/preview/47c5eb71546532f037446c5d7fd453f3-washington-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowWA(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowWA}
                onHide={() => setmdShowWA(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="WA">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Washington (WA)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/1200px-Flag_of_Washington.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Washington.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.proplants.com/blog/wp-content/uploads/2012/08/washington-hero.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Washington is the Pacific Rhododendron.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn.vox-cdn.com/thumbor/ZMpnkCBf__XgejLqC5rEjqFx-RI=/0x0:3345x2560/1200x800/filters:focal(2215x1352:2749x1886)/cdn.vox-cdn.com/uploads/chorus_image/image/54372261/4392738693_7bb694e001_o.0.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Washington is the Western Hemlock.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://epmgsenior.media.clients.ellingtoncms.com/img/photos/2012/04/30/p_2_goldfinch_2_t750x550.jpg?d885fc46c41745b3b5de550c70336c1b382931d2" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Washington is the Willow Goldfinch.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/148111/isolated/preview/326162b4aedab9fd9133caed0712d1a9-west-virginia-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowWV(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowWV}
                onHide={() => setmdShowWV(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="WV">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: West Virginia (WV)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg/1200px-Flag_of_West_Virginia.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of West Virginia.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://live.staticflickr.com/2057/2532276523_11cbd6ae6d_b.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of West Virginia is the Rhododendron.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn.shopify.com/s/files/1/0778/2679/files/1500sugar_maple_M_1024x1024.jpg?17363365130830428267" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of West Virginia is the Sugar Maple.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIWFRUXFxUXFhgXFxUXGBcXFxcXFxcVFRcYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICYtLS0tLy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLTAtLS0tLS0vLS0tLS0tLf/AABEIAMQBAQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAABAgUGB//EAD4QAAEDAgMGAwcBBQcFAAAAAAEAAhEDIQQSMQVBUWFxgROR8AYiMqGxwdHhM0JSYnIUFSOCkqLxJEOTstP/xAAbAQADAQEBAQEAAAAAAAAAAAAAAQIDBAUGB//EAC8RAAICAQMCAwcDBQAAAAAAAAABAhEDBCExEkEFIlETYXGBkdHwMqHBBiNCsfH/2gAMAwEAAhEDEQA/AA1GoJCZeEBwWbNCMKZDrJMFFzpDGWvWw9KB62HpiDlyw56EaiG56LA3UelH1Fb3oDygZT3IBKt71hoLtLDidO3FKUlFWy8eKeSXTBW/cQlYdUHFb8NvM9fwFDUjSB0/Rcz1ceys97D/AE3qJ7zko/u/t+4E1QisctNqg2IcfOFGhmsOHMAfOCqx6jq7HNrPCHp9+u/iq+5YCYY1YpM7pljV0njAXNQnhNOagVAkAs5qXqNTL0JyQxOoEu4XTVUJchAG6RXUwxsuZTauhhSgBxgTTEuxMMTAaplMMKVYUZjkCDrTUNpRGpgbUUUTChF6CUaoguUgBepmVPKygZrMrD0KVYKQBc6w8qpWXuQBklLuJJgfoOqzi8U1gvJJMNa0S5xgnK0bzZcen7UMMsLCyCZ6z+9zGijI5KPlVs69FhxZcqWaXTE7WQDX3j8uw391l9QneUph8YHwW3B3i+nPctOqjcfqvNkpyfmP0HSYNNhgvY1Xr6/Pubd0VMPBYyb5Cprt0Io6ZTQ2x3AAef5WvCPxWvax+oWaLZFjCPTZyAO+NF1aaO1nxXjeaLn09/iwtFqOWqqTUaF2HzwAhCqMTZasOagDnVGJV4XSqsXPrBIYo9Lo9RAQAwwJmlZApBNMagByk5M00pSTNMoAZYjNQGFGBTAK0ojSgNKICgQaVEPMqTCheohErbygPckBiosKOcsykMsq1iVaALJUo4d1S85Wb3H6NG/6LMiRmBLd4Gp5IeL2ruPujSwt0G4Ll1OXJBVjV+89Lw7SY88/7kq93dnWbUp0qb2sEOLSM9i+4iZ3dAvlm2timiZaQWfMdQvW1K4dPvO7FJYTCOd4jqpDWxYTm6k24LPTzyRtyZ62v0OFwUYRfx7L4nk8PXc2wJ0NuO+I6p/Z+0XlwAzl1tCCCekaJTG0A2oWtcCJtE9tV6PZmAdTEkhzjwJ0PFduSUYxtni6LT58uTpg2kuafA2MI8OsRzE38kY0nBM0326rQG+F5Msrs+9wYqjyAoVsrgSOR5rp0h+nRIug6pvDOBEbwujT5knTPB8a0Usi648ocphHAQaKYC9A+RMELBCLCohAClZq5mJC7NUWXLxbUmM5VVCYEWssUwgBiiE9TCTpBN00AMU2phgQKRTLEDCsCKsNK0gC2lFBQQVsOQIJKiwomAsSg1VpxWHFAgDyqa5U8rIKQzZK0ChZlsFAy3FL1BKM4oBKAOZtLCQ0up+66NADB7Lg0du1WG8GOy9e+4j8fdeC2iyKjhzlChF8o2jq88P0zYWk81KwIsXO4B2p3g6r2FDDusXEDjl1n1K8tsDL4ozcLA7z6C9S2odwXLq27SR9L/TuFShKbe7Y3IULh3S0OPJFpNjsuBxR9NJP/E2altL+YhEY4d0A1FsE+v1To8/I7XmZ08NWnr9U4CuJTdFwujh8RNiRJ05rtwZa8sj5fxHRK/aY/mv5Q0sq1kldh4oOqudik9UK5+KNkhnKrBZYEWossSEHpJpgS9NMNQAekE2wJainGJgbaFsKgrQMhCsKpVByANwoqzKJgJOKGStOQnOUhQOosSrc5YCANBbBWQtBMCnFAcUaogFAiiV5DbNOKrt+nz/5XrnFc2pgA6qKh0nz9GUOagrZvp9NPUTUIcnJ2NgH582kcen6r1jWgAITQNfVkQOn18l5mfK8jPu/DdAtHjaTtsG55UFNxRZAVOrcfXr7KIq+DTU5pwW5KdLj3W2uAOhQjWFtfn5FUHG9vP6hdCx1yeJPUuVpMYFSTPqeK21wOvrmPwl6cG8+SI3NuM+tE3Ex67d7HQw+J3E9+XE8kd7lzGGRcXG7gm6ToABsN3Lp+FrCbWzPP1WmT88SVCkMUU3WMWProkMQ6VvZ5jVcijys01HqqaCRpiPTQaaOxAxukmWpWimmoGGChWQVZQFFErMqErMoA1mUWFExULFyC4q3OQi5SMhVQorTEWFqVgFQlMCqhQyVpxWCmIw5SZYOU/n7qys023y8bjqsc8bgep4PmWPVRvvsVmRGOhCOqovXn1Z9/wBVIPIKjIO/pyPRAZfeI7/ZaNAEfEPOPkdU4pJnBqm5xdIrx3D3XWhFcBEtJ5jd2VPo+770GPNYaWgxK6VL0PAnhXdBKdUO3wd27nC2KhGplZIBHDgoyB1VGHHAy1wdqI6a91pttZP4QKb96aZVB9fVKkHVNcIKXZhD5LOO9vO6Q2hhzTv8TDo4fR3AptpGmYdDvH3R6bCBYgzudBBH8LpsVUZNHJnwxe6POVHKU108ZsxrpNKWO303af5XHTvbmuY0FpLXAtcNQbELaMk+DgnjlB1IapFMNKWajMKZA5STTCkaZTTHJFIYaVZKECtZkARyzKhKzKBm5UWcyiYjnkoZVkrBKkGaBWpQwVpUI1KqVUqJiMlUVZUITEYWQYcCdN/Q2n5okLD2yEmrVFQm4SUlytwVZ0OIKHPFSvr619fVZa7iuBxrY++w6lZYqS4ZproOt907+hR2uBs6x+qC64j12QwCNxI4KemypycV6oPUpuZJAkcnbuh3obKzXWiHDdGo+6Jh8WRuJG8aO6jc76oeLcyA5vvDkDmb1B+0rSDfDPKzY0vNF7F+KWa3HFa8SRIvy9b0m3FgDfG+Wn58FlztXUzHEHT5aLVI5ZSih5lTe09R60KJTeP3T23jp+EtRw7nNDy25vY3j1yWnFhs5oPUD9R9FMnTHii5qx8mbEflMUMQW2k/cdjqFy2U7SxxAGo+IdwZAHOQtiu8XIDhxBt5E27OUN2bexXc74qNePeHRzRp1bu7LGKDXNDajGuYLNc2Q5u+xN2n+U25LlUcY2bEtdwMz2Bg+Up+niJ+ITuJbr3H2MJqS+By5NPLmrX5+fwJ4jBlgzA52fxbxyeN30QmLqUwW3a4EerOCWq4O58PXXLxG/Jz/l8uC3jJ9zys2FJ3D6GKZTNMpOm5MMKowSGQVeZCDlRKRQUuWcyEXKs6YUFzKIOZWgBOVRVKihEM0FcrAKuVSJNBaCwFoKhFqlFEAUqKtUUAL12IIduKdISWKpFvvDTf+Vhlhe57XhWs6P7UuO32KY5EDks160HrncT6SGQZMG/Bb8QakEHiL/8AISjXlaFZLpYTlF9hgU26x3Fvot1NnU3iQRPG4PmI+coVFw1Hl+Eemd7T5/RUptbHnZ8EZ1JfTsxOrg640dmA0zDN2DmQ75ILq1TR9Mnplq94dDwu7SxPK1vx8lVcteIcAdx3qupHKozTpM4Da7J+NoPCXUnjo2rIPQEdU41rtQ8f5s1M9M2jv9SLXwAI917hynMB/lcCIXJxeAez/t0jO8NLJ70nNVqCZi9RPHyvz9zpvkD36ZjmAW9y33fkVKL97H9jcdryP9q4dLaT2RFN45CoD/7sc4dimKm2aTv2uGc7pE/6yc3kQj2LIXiUe6/PjX8HoKeMI/aNsd4uD0jXsD1TuEr6FpDo0J1H6+a8rS2lhrxVxFDk9visPYHMe7k/hsrz/hVqVQnTw6gY89adTKewlCxyiKepw5ueTuVGh9niHaNcNZ4O4hLwW2Pnx6LFOvUYQ14k8Hgsd1yu17HsncViGsaRVDQHGZuIPEG8c5AHEq4nFlW9gQVRKupTLQDYggEEGZB32Q8yZkXKizmUlAFyosyrQOxYrJWislNGTIFFAorINBaWVYTAuVFFSBFqirUQBULWVQLQSZaORjsMWe8Ph+iXbUXfhcrG7NI96nflvHTisZRPb0niG3Tk+oFtRE1STa0a7kcVN6zaPYjlUkGgi4RKVUHSyGH2kKyQdykiXIfxIWxWnXhFvkUnnPX1zUbB+F0HnbyTWxlkinsP+ODZ3mFHuka5m37fkdEk18G47fhWQN3W1j8t6Zi4OqA1aYBPPzBVQ0nS9kLEPnXXykcxuI8kEknS63XB5Mo1k4HnYRj+CQxWxm6gI7KsJqjiY0MKOqSOxabFONPk5DP7RREUqrsn8JOZn+h0t+Sbw3tVVpjLVote2wIEtHdpkDo3KuyMQHD3msdHK8dQg4jZTHDO2CDYjh5qllT/AFI5cmgnH9DJs32koTlacrSf2dQXaTqWu0M8yD10XXxOWzmggHUbuUH9AvLO2KyYIg8DY/qF6HAHKwM4WvcdCE51Vowx4pPaS+ZqVCUZ2GmSBl38Wnv+73tzS5JBgiCktyJQcXTLUWJVJkmSVlQqBNGbIrVFQFUSbCtZVpiLUVKJiLUVKNSGbC1KxKiRSNypKyCpKhloxiMIyp8Tb8RY+f5XLrbLe27DnHDQ/quvKsOU0b4s88fDPOeJFiCD0g+S0KxN136oDhDgD1EpOpgWEFwb1HLiJ7qJUlZ6en1byyUO5zhX9flWawOt+ip+zi4+67LzufIKquzqjWudnaQ0SZkamABa5PDrwTUU1ZeTV9E+hhAQdD+FQJH73Y3QaGBqEZoDQbDMYkxNhrol61Utzb4dlkcU1D0MMmsj32HXNnUeVx24KCid1N3r6reCfDWv1zCYOmp4Qn6u1Krm5ZAbpAAj5yVXSck9UruJyzQOoBHksHBVNQWnuQfpCcaEVqqjF6iTdnNPiM+IHru8wmsLtGE/TK0cMw6sb5fhQ4pnTj1slszDNpBwyvhw56joRcKF38DgRuDjH+6/zWH7KpHTMOjvzKEdkM/jf5j8KVCuGay1kJbtD+G2w9jg2IO4Ei/9J/eHmnmbYpVPdqUgDy49LeYK4TdlAW8R5G9pyuaeoIjut1cHpDp5Olw7O+IeZA4K9zFSwye6/Pz/AIdWaPLzeouJ/Z6nBv8A5n//ADUU+Y16dN7vq/sPqBZlQFaI8pmiqlUXbhcnQc+AXTpezmLdEUHX4wPuqtLkk5wK1K7bfY/FZS4hrYEwTdMbD9kTXo+I+pkcT7oibTqVDzY0rbH0y9Dzkq5XY2z7M1qDyGA1GATmH3XDFRXGSkrRLVchCVQKzKgTAJKtYBVgpMpGpUlUFSlloslQuW8Nh31XZWCTv3AdSuq2gygCZlwsXndxDGm881DdGkI2xXDbMJGeoQ0awTHdx3Dlqh4zFtIy0xbe6In+kbggYrFOqWuGjQT8yg74AkmwA3zoAN5SUb5Kc+lVEprCSGtEk6evuldr4lrWHL7zKd3HTPUJg9hIA/VOYt4pDI2ozxHA5yHAim3eJG8CSew0mfK4/auYOpRDJEHflER5kTKtRti6vZx6u7Kxm0nFtN+aHOF4tADjEcN3ksPfYSficXevW5JY0iWNGjWgd7n8BbpVC7sLeUfW62o5XKz0WEaRTYCIOUWRFojTkqWZRYCI1YCIxJlBWIzUFiM0pFI0qVqikUUqKzVqNbAe4NnSd8aqMqNd8LptMjQjQ+RTEWop69WVIHsdml7L1QT4zhSaBYxmk/hdDZXsgMwfUf4lO9mgt6GV6JufNmJlvA7kxV2kAMrXCeFlyyyT33oahHbucylsjDUHQKcgEEE3dOo8k5W2hWzOs5rQLWlViMQGhtQm8rGMxzQ0++JOl1zSis0PPdm0fK9kWRUfZzw6R8MltuaLszEOBLajPCDIA0IcP5VzvHp1IAqx+UYtLWEVnhzZkEWICI4o9HTX+xye/J1cY7MxxpvmxsV5ypsKm+mQcPkeWkBwmAdxtqnsHtbDh2VubreEPH7dBkCXDSwVW8e759wunq2rb3nFPsY8sBbV98ahwhp/pIW6PsQ/LL6wDuAaSPNLU8ZWFYHM/wAPeF6artvIIaJBEiPoV0xzTrzGcsMb8p5p3sjVAnxGTwSg9m8ZBPgG3Nt+YuuxX2vUdB8Eug7zEdl1h7RMZlOVxkX5KvbPuS8XoeQOwsTEllpG/jvsss2blP8AjOLRMQ0OB7l7QGjndesZ7RU3Ek0n9Qs19rFzyRTJpkQQSJSeaSe6H7JPueYAdWmjhKTyALvYCRJ1BeYkkbxyhViNgVaTGurSwXBMAgHjcj1xXq8Ji6TQQG+HyE/8IGIxNFwAqkOAMi9p4xxVe2t8FU6pnkhhmHSrmHFrLdiXJikKdOmatIuc4DUtPujQlrQLjdI0nhK6GMqbPDPCIAm9iTJ4mLLoj2mYGNbRb8IiMtoHCybyNVSZNL3Hz5uDZVmK7BJ96bxyMaXSOI2JRZ71eu7IIBNOnIDjpJJ5cLr3WL2hSryKuHZfXKwNJ5ExKQfhcLVy0xhDBI/fMSN8StVJ/lEyqW75+Z882tgDRqlhcHiGuY4TD2OEtcButu4zrqqwVOSBxIHzC+gbR2NSc4B+GEsaGtio8Q0TAtuvvQR7P4cODhRiL/tKmvSYVqaoxcHZzHOWQvSYPDUaTy40W1WkQA95gHiLIGO2bTe9zmRSBiGC4HGCVF70V0s4jUVqe/u6kPirFp5tEfVZqYSm0x/aGj+oR90DoA1FarrspU4zV235E/RYp16ZdlD5O6Ab9EqGgiQ2ti304yOLSQTI36CNV0GFhJAqNkbjZcfb9F/iMt+7bTjJIv0TjyEuDmVa76kS6YNpJcZtpw3JvY9Z4fDj7otF4E2BHz7JKpTe2ZaRHr8roYfFNDG3BdLS6x1vBI0ItpzWj4MlydzIouN/f1T+H5/oosqZp1I+gbbxjyWgOInWLLn4dmR2YEzzMqKLlW8Nzp4Y1ScXEyZB3G4UrUW/whRRZPk2SKe0BsgAHiEv/aHE3KiiqCVgzTMQW6R5INfaTxpHkoouqMI+hzSk/UTxG16si48lzcdtWtIAeR0hRRaqK9DCUn6jVCtUcL1H+cJmjQuAXvM8XKKKWXEdGGDdJ8ylap5nzP5UUQDJ4AIvPmUE4SnPwA9ZUUQOglbKYGRo6BAGMe0OgxE7lFEAc/D7VqG5g3jRL4na1VlQ5SBv0UUWtIxtmqO0ajzLnkkoW0NsVmloDoCiiVIG3QfFbRqFkzdIjGvgOm6iidILY6/EuqNAdeUPF0wDGsWE31UUU9xvgRxlo5ApTCVSACDcC3mooqRI7seXCo4kyDbvqV0cbU/6c1DBc0wJuIIvbn9gool3H2PNuqmbGAJIG4WT1OqZ7aQLw0kT3CiipkoH438rfJUooigtn//Z" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of West Virginia is the Cardinal.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/148114/isolated/preview/7fffb8df42a3405a626a2d8d782f98ed-wisconsin-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowWI(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowWI}
                onHide={() => setmdShowWI(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="WI">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Wisconsin (WI)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Wisconsin.svg/1200px-Flag_of_Wisconsin.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Wisconsin.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.pinimg.com/originals/6f/a5/91/6fa5916364466c04b1cbd3cc8af0a9c7.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Wisconsin is the Wood Violet.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn11.bigcommerce.com/s-2lqvsr5/images/stencil/800x800/products/805/789/ssuga__05336.1502848840.jpg?c=2" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Wisconsin is the Sugar Maple.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Turdus-migratorius-002.jpg/1200px-Turdus-migratorius-002.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Wisconsin is the Robin.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/148128/isolated/preview/20ad93098a4ef451abb7e354bf33157e-wyoming-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-warning mx-1 mt-auto" onClick={() => setmdShowWY(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowWY}
                onHide={() => setmdShowWY(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="WY">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Wyoming (WY)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="ihttps://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/1200px-Flag_of_Wyoming.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Wyoming.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Indian_Paintbrush_in_Grand_Teton_NP-NPS.jpg/1200px-Indian_Paintbrush_in_Grand_Teton_NP-NPS.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Wyoming is the Indian Paintbrush.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.atoztheusa.com/state_images/Nature/WY/S-WY-tree3.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Wyoming is the Cottonwood.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.powelltribune.com/uploads/original/20190528-083339-Bird-1.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Wyoming is the Western Meadowlark.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-auto">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>







        </Container>
    );

}

export default StateCards;