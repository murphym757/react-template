import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import BootstrapProvider from '@bootstrap-styled/provider';
import { GlobalStyle } from '../assets/styles/globalStyling';
import {
    souseDefaultTheme,
    souseDefaultThemeDark
} from '../assets/styles/globalTheme';
import {
    CardContainer,
    MainCard
} from '../assets/styles/mainStyling';
import { CardBlock } from '@bootstrap-styled/v4';

// Pages
import LandingPage from './navigation/LandingPage';

export default function MainSource(props) {
    const [currentTheme, setCurrentTheme] = useState();
        useEffect(() => {
            let currentTime = new Date();
            let time = currentTime.getHours();
            console.log(time);
            if (time >= 17 || time < 7) {
                setCurrentTheme(souseDefaultThemeDark);
            } else {
                setCurrentTheme(souseDefaultTheme);
            }
    }); 
    return (
        <Router>
            <div>
                <div class="container-fluid p-auto">
                    <CardContainer className="container-fluid pt-3 pb-3">
                        <BootstrapProvider theme={currentTheme}>
                            <GlobalStyle />
                                <MainCard>
                                    <CardBlock className="m-0 pl-0 pr-0">  
                                            {/*Routes*/}
                                            <Switch>
                                                <Route exact path="/" component={LandingPage}/>
                                            </Switch>
                                    </CardBlock>
                                </MainCard>
                        </BootstrapProvider>
                    </CardContainer>
                </div>
            </div>
        </Router>

    );
}



  