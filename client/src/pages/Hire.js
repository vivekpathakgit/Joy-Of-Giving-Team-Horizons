
import React, {useState, useEffect} from 'react'
import Layout from '../components/layouts/Layout'
import { toast } from 'react-toastify';
import axios from 'axios';
const Hire = () => {
  
    //get all benifs
    const [benif, setBenif] = useState([]);
    const getAllBenifs = async ()=>{
        try {
            const {data} = await axios.get('/api/v1/benif/get-benif');
            if(data?.success){
              setBenif(data?.benif);
            }
        } catch (error) {
            console.log(error)
        }
    }
    //lifecycle method
    useEffect(()=>{
        getAllBenifs();
    },[])
  return (
    <Layout title='Benificieries'>
        <div>
            <h1 className="text-center">All Benificieries</h1>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Speciality</th>
      <th scope="col">Locality</th>
    </tr>
  </thead>
  <tbody>
    {
        benif?.map(p=>(
            
                <tr >
            <th scope="row">{p.name}</th>
            <td>{p.phone}</td>
            <td>{p.speciality}</td>
            <td>{p.locality}</td>
          </tr>

        ))
        
    }
  </tbody>
</table>

        </div>
    </Layout>
  )
}

export default Hire