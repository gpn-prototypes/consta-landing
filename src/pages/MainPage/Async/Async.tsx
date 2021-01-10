import React from 'react';
import { Button } from '@consta/uikit/Button';
import { useAction, useAtom } from '@reatom/react';

import { getFormDataAction, isLoadingFormDataAtom } from '@/modules/async';

export const Async: React.FC = () => {
  const isLoading = useAtom(isLoadingFormDataAtom);
  const onClick = useAction(getFormDataAction);

  return (
    <div>
      <Button label={`loading-${isLoading}`} onClick={onClick} />
    </div>
  );
};
