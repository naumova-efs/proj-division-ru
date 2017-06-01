/// <reference path="../node_modules/@types/react/index.d.ts"/>
/// <reference path="../node_modules/@types/react-dom/index.d.ts"/>

import * as React from 'react';
import * as ReactDOM from "react-dom";

import { DivisionTest} from "./components/DivisionTest";



ReactDOM.render(
    <DivisionTest testTimeSec = {30} />,
    document.getElementById("divisiontest")
);
