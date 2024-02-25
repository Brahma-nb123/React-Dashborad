import React, { useState } from 'react';
import './Card.css'

import {motion,AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
// import { UilTimers } from "@iconscout/react-unicons"; // Correct component name
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from "@iconscout/react-unicons";
import Chart from 'react-apexcharts';

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompacartCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// CompactCard
function CompacartCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div className='CompacartCard' style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow
    }}
    onClick={setExpanded}
    layoutId='expandableCard'
    >
      {/*  This should be inside an event handler */}
      <div className='radialBar' >
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className='detail'>
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

// Expanded CARD
function ExpandedCard({ param, setExpanded }) {

  const data={
    options:{
      Chart:{
        type:"area",
        height:"auto",
      },

      dropShadow:{
        enabled:false,
        enabledOnSeries: undefined,
        top:0,
        left:0,
        blur:3,
        color:"#000",
        opacity: 0.35,
      },

      fill:{
        color:["#fff"],
       type:"gradient"
      },
      dataLabels:{
        enables: false,
      },
      strock:{
        curve: "smooth",
        colors:["white"],
      },
      tooltip:{
        x:{
          format:"dd/mm/yy HH:mm", 
        }
      },
      grid:{
        show:true,
      },
      xaxis:{
        type:"datetime",
        categories:[
          "2018-09-19T00:00:00.000z",
          "2018-09-19T01:30:00.000z",
          "2018-09-19T02:30:00.000z",
          "2018-09-19T03:30:00.000z",
          "2018-09-19T04:30:00.000z",
          "2018-09-19T05:30:00.000z",
          
        ]
      }
    }
  }

  return (
    <motion.div className='ExpandedCard' style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow,
    }}    
    layoutId='expandableCard'
       
    >
      <div className='UilTimes'>
        <UilTimes onClick={setExpanded}  
        />
      </div>
      <span>{param.title}</span>
      <div className='chartContainer'>

        {/* <Chart series={param.series} type='area' /> */}
    <Chart series={param.series} type='area' options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
