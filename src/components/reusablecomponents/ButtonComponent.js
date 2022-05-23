import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

{/* Reusable Button, but it is not working in all places like when used in the Modal Button, Settings*/}

function ButtonComponent({ children }) {
    return (
        <>
           <Button variant="warning light" size="md" enabled > {children}  </Button>       
        </>
    )
}

export default ButtonComponent;