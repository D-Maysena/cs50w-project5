import { useEffect, useState } from "react";
import { fetchCommunities } from "../helpers/api";
import { CommunityItem } from "./CommunityItem";

export const CommunitiesList = () => {

  const [ communities, setCommunity ] = useState([])

  useEffect(() => {
    const getCommunities = async () => {
      const data = await fetchCommunities()
      setCommunity(data);
    }

    getCommunities();
  }, [])
  
  return (
    <>
      <div className="container mt-3">
        <div className="d-grid gap-3 d-grid-template-1fr-19">
          {
            communities.map(item =>
              <CommunityItem key={item.id} item={item} />

            )

          }

        </div>
      </div>
    </>
  );
};
