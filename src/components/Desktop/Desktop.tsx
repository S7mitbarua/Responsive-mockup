import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop.module.css';
import { FluentMdl2WebsiteIcon } from './FluentMdl2WebsiteIcon';
import { ProfileImageIcon } from './ProfileImageIcon';
import { UiwGithubIcon } from './UiwGithubIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Desktop: FC<Props> = memo(function Desktop(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.profileImage}>
        <ProfileImageIcon className={classes.icon} />
      </div>
      <div className={classes.sB}>SB</div>
      <div className={classes.home}>Home</div>
      <div className={classes.project}>Project</div>
      <div className={classes.about}>About </div>
      <div className={classes.contact}>Contact</div>
      <div className={classes.interactionDesigner}>Interaction Designer</div>
      <div className={classes.uXEngineer}>UX Engineer</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet consectetur. Nibh sit lacus sed odio gravida iaculis nullam non eget. Vitae ut
        pellentesque arcu ut molestie ligula.
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.hireMe}>Hire Me!</div>
      <div className={classes.fluentMdl2Website}>
        <FluentMdl2WebsiteIcon className={classes.icon2} />
      </div>
      <div className={classes.uiwGithub}>
        <UiwGithubIcon className={classes.icon3} />
      </div>
    </div>
  );
});
