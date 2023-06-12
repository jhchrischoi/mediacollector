import { personalCollectionRequest } from '../../utilities/collections-api';
import { useEffect, useState } from 'react'
import CollectionsList from '../../components/CollectionsList/CollectionsList';
import { Link } from 'react-router-dom'
import '../../fregg/css/bootstrap.css'
import '../../fregg/css/responsive.css'
import '../../fregg/css/style.css'
import '../../fregg/css/style.css.map'

export default function CollectionsIndexPage(){
    const [collections, setCollections] = useState([])
    useEffect(()=>{
        console.log('loading...')
        async function getCollections(){
            const collections = await personalCollectionRequest();
            setCollections(collections)
        }
        getCollections();
    }, [])
    return(
        <>
        <section class="about_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2 style={{ color: 'white' }}>
                Collection List
              </h2>
            </div>
            <br />
            <CollectionsList collections={collections}></CollectionsList>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <p><Link to="/collections/new" class="plus-button">Add new</Link></p>
  </div>
        </>
    )
}