import React, { Fragment } from 'react';
import {
  Box,
  Text,
  BulletList,
  Bullet,
  Divider
} from '../../../../lib/components';

export default () => (
  <Fragment>
    <Box paddingBottom="large">
      <Text size="large" weight="strong">
        Philosophy
      </Text>
    </Box>
    <Box paddingBottom="large">
      <Text weight="strong">Product teams should focus on user problems.</Text>
    </Box>
    <Box paddingBottom="large">
      <Text>
        Designers and developers shouldn't have to constantly reinvent the
        low-level building blocks of our interfaces.
      </Text>
    </Box>
    <Box paddingBottom="large">
      <Divider />
    </Box>
    <Box paddingBottom="large">
      <Text weight="strong">Users should have a consistent experience.</Text>
    </Box>
    <Box paddingBottom="large">
      <Text>
        Users should be able to navigate our entire product suite without
        feeling like they’re jumping between radically different design and
        interaction paradigms.
      </Text>
    </Box>
    <Box paddingBottom="large">
      <Text>
        Standardised components should be used as much as possible, and custom
        design code should be treated as a last resort.
      </Text>
    </Box>
    <Box paddingBottom="large">
      <Divider />
    </Box>
    <Box paddingBottom="large">
      <Text weight="strong">Code is the source of truth for design.</Text>
    </Box>
    <Box paddingBottom="large">
      <Text>
        Our design rules should be defined in code as a set of reusable
        components. Developers should think in terms of components, not pixels.
      </Text>
    </Box>
    <Box paddingBottom="large">
      <Divider />
    </Box>
    <Box paddingBottom="large">
      <Text weight="strong">Components should be themeable.</Text>
    </Box>
    <Box paddingBottom="large">
      <Text>
        We shouldn’t be forced to build the same application multiple times to
        support multiple regions.
      </Text>
    </Box>
    <Box paddingBottom="large">
      <Divider />
    </Box>
    <Box paddingBottom="large">
      <Text weight="strong">Design should happen in the medium itself.</Text>
    </Box>
    <Box paddingBottom="large">
      <Text>
        Global theming poses a fundamental challenge to our existing design
        workflows. No longer can we draw static pictures and treat them as
        specifications. Any designs work that isn’t in code should be treated as
        purely conceptual.
      </Text>
    </Box>
    <Box paddingBottom="large">
      <Text>
        Designers need to work closely with design system engineers to ensure
        that they’re working within the bounds of the current system, or
        proposing and implementing changes that not only serve their immediate
        needs, but benefit future product work that uses the same patterns.
      </Text>
    </Box>
    <Box paddingBottom="large">
      <Text>
        With a mature design system, product teams should be able to design new
        screens entirely out of pre-existing components, with little to no
        custom styling code.
      </Text>
    </Box>
    <Box paddingBottom="large">
      <Text>
        Designers should be able iterate on the product itself rather than
        static mock-ups, testing their desired interactions rather than crude
        approximations.
      </Text>
    </Box>
    <Box paddingBottom="large">
      <Divider />
    </Box>
    <Box paddingBottom="large">
      <Text weight="strong">Product teams are sovereign.</Text>
    </Box>
    <Box paddingBottom="large">
      <BulletList>
        <Bullet>Product teams *choose* to install the design system.</Bullet>
        <Bullet>Product teams *choose* to update to new versions.</Bullet>
        <Bullet>
          Product teams *choose* to use components as they see fit.
        </Bullet>
      </BulletList>
    </Box>
    <Box paddingBottom="large">
      <Text>Of course, this naturally implies that:</Text>
    </Box>
    <Box paddingBottom="large">
      <BulletList>
        <Bullet>Product teams *may* opt out of the design system.</Bullet>
        <Bullet>
          Product teams *may* opt out of updates if there is disagreement.
        </Bullet>
        <Bullet>
          Product teams *may* write whatever custom styling code they like.
        </Bullet>
      </BulletList>
    </Box>
    <Box paddingBottom="large">
      <Text>
        Of course, these decisions have a massive impact on the quality of the
        work produced, and how well a product fits into the larger product
        ecosystem.
      </Text>
    </Box>
  </Fragment>
);
