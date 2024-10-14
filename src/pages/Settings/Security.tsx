import { FC } from 'react';
import { SettingsTemplate } from 'templates/Settings';

export const SecuritySettings: FC = () => {
  return (
    <SettingsTemplate link='/settings/security'>
      <div>security</div>
    </SettingsTemplate>
  );
};