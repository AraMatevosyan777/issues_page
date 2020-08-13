import React, { useState } from 'react';
import LabelsTable from '../../components/labels/LabelsTable';
import LabelsModal from '../../Modals/LabelsModal';
import LabelsHeader from '../../components/labels/LabelsHeader';

const LabelsPage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <LabelsHeader setVisible={() => setVisible(true)} />
      <LabelsModal visible={visible} setVisible={() => setVisible(false)} />
      <LabelsTable />
    </div>
  );
};

export default LabelsPage;
