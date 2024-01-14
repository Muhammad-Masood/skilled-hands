import CrafterData from "@/app/component/CrafterData";
import axios from "axios";

const page = async ({params}:{params:{crafterId:string}}) => {
  const {crafterId} = params;
  //showing 
  const ProfileResponse = (await axios.get(`${process.env.PORT_URL}/api/crafter/profile?id=${crafterId}`)).data;
  console.log(ProfileResponse);   
  //showing post
  const PostResponse = (await axios.get(`${process.env.PORT_URL}/api/crafter/post?id=${crafterId}`)).data;
  console.log(PostResponse);

  const CrafterDataProps = {
     profile: ProfileResponse,
     post:  PostResponse
  }
    return (
    <div>
      <CrafterData crafterData={CrafterDataProps}/>
    </div>
  )
}

export default page