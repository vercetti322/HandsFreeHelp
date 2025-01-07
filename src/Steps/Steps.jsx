import './Steps.css';
import DownloadIcon from '@mui/icons-material/Download';
import PinIcon from '@mui/icons-material/Pin';
import ConnectedTvOutlinedIcon from '@mui/icons-material/ConnectedTvOutlined';

export default function Steps() {
  return (
    <div className="steps">
      <div className="step">
        <DownloadIcon fontSize="inherit" style={{ fontSize: '75px' }} />
        <h3>Step 1</h3>
        <p>Ask the customer to download the access file.</p>
      </div>
      <div className="step">
        <PinIcon fontSize="inherit" style={{ fontSize: '75px' }} />
        <h3>Step 2</h3>
        <p>
          Obtain the <span style={{ fontWeight: 'bold' }}>Access Code</span>{' '}
          from the customer.
        </p>
      </div>
      <div className="step">
        <ConnectedTvOutlinedIcon
          fontSize="inherit"
          style={{ fontSize: '75px' }}
        />
        <h3>Step 3</h3>
        <p>Connect to the customer&#39;s system via code.</p>
      </div>
    </div>
  );
}
