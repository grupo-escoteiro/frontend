import { useState } from 'react';
import { arrayOf, string, node } from 'prop-types';
import { TabHeader } from './components/tab-header';

function Tabs({ body, titles }) {
  const [tab, setTab] = useState(0);

  function handleChangeTab(selectedTab) {
    const alreadyIsActive = tab === selectedTab;
    if(alreadyIsActive) return;

    setTab(selectedTab);
  }

  return (
    <div className="w-full">
      <TabHeader
        tab={tab}
        titles={titles}
        changeTab={handleChangeTab}
      />
      <div className="w-full pl-6 pt-8">
        {body[tab]}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  titles: arrayOf(string).isRequired,
  body: arrayOf(node).isRequired,
};

export { Tabs };
