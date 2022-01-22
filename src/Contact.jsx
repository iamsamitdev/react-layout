import MainLayout from './components/layouts/MainLayout';
import DocumentTitle from 'react-document-title';

function Contact() {
  return (
    <MainLayout>
        <DocumentTitle title='Contact' />
        <div>
            <div className="jumbotron">
                <h1 className="display-6">หน้าติดต่อเรา</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro facilis ducimus explicabo odio deleniti minus recusandae quaerat. Placeat, id commodi explicabo fuga vitae quo aliquid praesentium doloremque ipsam dolor.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro facilis ducimus explicabo odio deleniti minus recusandae quaerat. Placeat, id commodi explicabo fuga vitae quo aliquid praesentium doloremque ipsam dolor.</p>
        </div>
    </MainLayout>
  )
}

export default Contact;
