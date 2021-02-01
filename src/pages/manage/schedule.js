import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import MslScheduleCommon from "components/msl/manage/schedule-common"
import MslScheduleTeamInfo from "components/msl/manage/schedule-team-info"

const ManageSchedule = ({ path }) => (
  <Layout>
    <SEO title="Manage Schedule" path={path} />
    <div className="mx-auto justify-center items-center ">
      <div className="rounded-t-xl overflow-hidden bg-gradient-to-r gray-50 to-gray-100 p-10">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="col-span-4 bg-green-500 rounded-md md:flex justify-center items-start">
            <div className="md:grid md:grid-cols-2 md:gap-6 m-5">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <MslScheduleCommon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-0 col-span-4 md:row-span-2 md:col-span-2 bg-green-300 rounded-md md:flex justify-center items-start">
            <div className="md:grid md:grid-cols-2 md:gap-6 m-5">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <MslScheduleTeamInfo team_type="home" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-0 col-span-4 md:row-span-2 md:col-span-2 bg-green-500 rounded-md md:flex justify-center items-start">
            <div className="md:grid md:grid-cols-2 md:gap-6 m-5">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <MslScheduleTeamInfo team_type="away" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ManageSchedule
