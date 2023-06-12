import NewCollectionForm from "../../components/NewCollectionForm/NewCollectionForm"
import '../../fregg/css/bootstrap.css'
import '../../fregg/css/responsive.css'
import '../../fregg/css/style.css'
import '../../fregg/css/style.css.map'

export default function NewCollectionPage(){
    return(
        <>
        <br />
        <br />
        <br />
        <section class="contact_section">
        <div class="container contact_bg layout_padding2-top">
            <h2 class="create-new-border">Create New</h2>
            <br />
            <br />
            <br />
            <div class="row">
                <div class="col-md-6">
                    <div class="contact_form ">
                        <NewCollectionForm></NewCollectionForm>
                    </div>
                </div>
            </div>
        </div>
        </section>
        
        </>
    )
}