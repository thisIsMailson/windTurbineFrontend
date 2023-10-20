'use client';

import React, { useEffect, useState } from 'react';
import DataDisplay from './components/dataDisplay';
import { get } from 'http';
import axios from 'axios';
import VariableChart from './components/variableChart';
import SelectComponent from './components/selectComponent';
import StatusDisplay from './components/statusDisplay';

const Home = () => {
  const [stats, setStats] = useState(null);
  const [dataByVariable, setDataByVariable] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [latestStatus, setLatestStatus] = useState(null);

  const getStats = async () => {
    try {
      const req = await (await fetch('/api/get-stats')).json();
      console.log('req =>', req);
      return req;
    } catch (error) {
      console.error(error);
      return {};
    }
  };
  const getByVariable = async (variable: number) => {

    try {
      await axios.get(`/api/get-by-variable`, {
        params: {
          variable,
        },
      }).then(res => {
        setDataByVariable(res.data.slice(0, 10000));
      });

    } catch (error) {
      console.error(error);
      return {};
    }
  }

  const getLatestStatus = async (variable: number) => {
    try {
      await axios.get(`/api/get-latest-status`, {
        params: {
          variable,
        }
      }).then(res => {
        setLatestStatus(res.data);
      })
    } catch (error) {
      console.error(error);
      return {};
    }
  }

  const loadData = () => {
    getStats().then(req => setStats(req))
  }

  useEffect(() => {
    console.log('val =>', latestStatus);

  }, [latestStatus]);
  return (
    <>
      <div className='info-grid'>
        <div className='first-div'>
          <div>
            <button onClick={() => loadData()}>Load stats</button>
            {stats && <DataDisplay data={stats} />}
          </div>
          <div>
            <SelectComponent getByVariable={getByVariable} />
            {dataByVariable && <VariableChart data={dataByVariable} />}
          </div>
        </div>
        <div className='second-div'>
          <div onClick={() => getLatestStatus(2)}>by status</div>
          {latestStatus && < StatusDisplay data={latestStatus} />}
        </div>
      </div>
    </>
  );
};

export default Home;