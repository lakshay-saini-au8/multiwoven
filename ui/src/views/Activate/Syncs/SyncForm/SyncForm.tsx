import { useState } from 'react';
import SteppedForm from '@/components/SteppedForm';
import { Stream } from '@/views/Activate/Syncs/types';

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import SelectModel from './SelectModel';
import SelectDestination from './SelectDestination';
import ConfigureSyncs from './ConfigureSyncs';
import FinaliseSync from './FinaliseSync';

const SyncForm = (): JSX.Element => {
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);
  const [configuration, setConfiguration] = useState<Record<
    string,
    string
  > | null>(null);
  const navigate = useNavigate();
  const steps = [
    {
      formKey: 'selectModel',
      name: 'Select a model',
      component: <SelectModel />,
      isRequireContinueCta: false,
    },
    {
      formKey: 'selectDestination',
      name: 'Select a destination',
      component: (
        <SelectDestination
          setSelectedStream={setSelectedStream}
          setConfiguration={setConfiguration}
        />
      ),
      isRequireContinueCta: false,
    },
    {
      formKey: 'configureSyncs',
      name: 'Configure sync',
      component: (
        <ConfigureSyncs
          selectedStream={selectedStream}
          configuration={configuration}
          setSelectedStream={setSelectedStream}
          setConfiguration={setConfiguration}
        />
      ),
      isRequireContinueCta: false,
    },
    {
      formKey: 'finaliseSync',
      name: 'Finalize sync',
      component: <FinaliseSync />,
      isRequireContinueCta: false,
    },
  ];

  return (
    <Drawer isOpen onClose={() => navigate(-1)} placement='right' size='100%'>
      <DrawerOverlay />
      <DrawerContent padding='0px'>
        <DrawerBody padding='0px'>
          <Box>
            <SteppedForm steps={steps} />
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SyncForm;
