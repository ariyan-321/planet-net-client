import { Helmet } from 'react-helmet-async'
import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics'
import useRole from '../../../hooks/useRole'
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
const Statistics = () => {
  const[role,isloading]=useRole();

  if(isloading){
    return <LoadingSpinner></LoadingSpinner>
  }

  if(role==="customer"){
    return <Navigate to={"/dashboard/my-orders"}></Navigate>
  }
  if(role==="seller"){
    return <Navigate to={"/dashboard/my-inventory"}></Navigate>
  }

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {role==="admin"&&<AdminStatistics />}
    </div>
  )
}

export default Statistics