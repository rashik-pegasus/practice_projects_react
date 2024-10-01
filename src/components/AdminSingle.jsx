import { useParams } from 'react-router-dom'
import { adminsList } from '../data/UsersData';


const adminSingle = () => {

    const {adminName} = useParams();

  return (
    <>
        <div>
            {adminsList.map(item => {
                <div key={item.id}>
                    <h2>Welcome {item.name}</h2>
                    <p>{item.message}</p>
                    <p></p>
                </div>
            })}
        </div>
    </>
  )
}

export default adminSingle 