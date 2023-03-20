import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Shared.css';

export default function MovieModal(props) {
  console.log(props)
  const trailer = props?.trailer && props?.trailer?.linkEmbed?.length ? props.trailer.linkEmbed : '';
  return (
    <Modal
      {...props}
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {props.result.title} Trailer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <iframe 
            src={trailer}
            title={props.result.title}
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe> 
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}