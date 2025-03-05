import React from 'react'
import '../componentStyling/Main.css'
import TodaysSales from './TodaysSales'
import VisitorInsightsChart from './VisitorInsightsChart'
import WeeklySalesChart from './WeeklySalesChart'
import CustomerSatisfactionChart from './CustomerSatisfactionChart'
function Main() {
  return (
    <div className='mainSectionContainer'>
        <TodaysSales/>
        <div className='chartSection'>
          <div className='chart-item large'>
          <VisitorInsightsChart/>
          </div>
          <div className='chart-item small'>
          <WeeklySalesChart/>
          </div>
          <div className='chart-item large'>
          <CustomerSatisfactionChart/>
          </div>
        </div>
    </div>
  )
}

export default Main