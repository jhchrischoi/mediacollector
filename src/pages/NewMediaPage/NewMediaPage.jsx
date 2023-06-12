import NewMediaForm from "../../components/NewMediaForm/NewMediaForm"
import '../../fregg/css/bootstrap.css'
import '../../fregg/css/responsive.css'
import '../../fregg/css/style.css'
import '../../fregg/css/style.css.map'

export default function NewMediaPage(){
    return(
        <>
         <br />
        <br />
        <br />
        <section class="contact_section">
        <div class="container contact_bg layout_padding2-top">
            <h2 class="create-new-border">Add New Media</h2>
            <br />
            <br />
            <br />
            <div class="row">
                <div class="col-md-6">
                    <div class="contact_form ">
                    <NewMediaForm />
                    </div>
                </div>
            </div>
        </div>
        </section>
        
        </>
    )
}