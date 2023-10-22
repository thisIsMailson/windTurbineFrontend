'use client';

import React, { useEffect, useState } from 'react';
import DataDisplay from './components/dataDisplay';
import { get } from 'http';
import axios from 'axios';
import VariableChart from './components/variableChart';
import SelectComponent from './components/selectComponent';
import StatusDisplay from './components/statusDisplay';
import DateSelector from './components/dateSelector';

const Home = () => {
  const [stats, setStats] = useState(null);
  const [dataByVariable, setDataByVariable] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [latestStatus, setLatestStatus] = useState(null);
  const [dataByDate, setDataByDate] = useState(null);
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
  const getDataByDate = async (startDate: Date, endDate: Date | null) => {
    const start_date = startDate.toISOString().split('T')[0];
    const end_date = endDate?.toISOString().split('T')[0];
    if (endDate) {
      await axios.get(`/api/get-by-date-range`, {
        params: {
          start_date,
          end_date
        }
      }).then(res => {
        setDataByDate(res.data.slice(0, 10000));
      })
    } else {
      await axios.get(`/api/get-by-single-date`, {
        params: {
          start_date,
        }
      }).then(res => {
        setDataByDate(res.data.slice(0, 10000));
      })
    }
  }

  return (
    <>
      <div className='info-grid'>
        <div className='first-div'>
          <div >
            <div className='data-button' onClick={() => loadData()}>Load stats
              <div>
                {stats && <DataDisplay data={stats} />}
              </div>
            </div>
          </div>
          <div className='data-button'>
            <SelectComponent title='Data by variable' getByVariable={getByVariable} display='Get data for:' />
            {dataByVariable && <VariableChart data={dataByVariable} />}
          </div>

        </div>
        <div className='second-div'>
          <div>
            <div className='data-button'>

              <SelectComponent title='Latest status' getByVariable={getLatestStatus} display='Get latest status for:' />

              {/* <div className='data-button' onClick={() => getLatestStatus(2)}>by status</div> */}
              {latestStatus && < StatusDisplay data={latestStatus} />}
            </div>

            <div className='data-button'>
              <DateSelector onSubmit={getDataByDate} />
              {dataByDate && <VariableChart data={dataByDate} color='red' />}
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Home;