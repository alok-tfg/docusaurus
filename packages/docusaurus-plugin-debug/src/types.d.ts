/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/// <reference types="@docusaurus/module-type-aliases" />

declare module '@theme/DebugConfig' {
  export default function DebugMetadata(): JSX.Element;
}

declare module '@theme/DebugContent' {
  import type {AllContent} from '@docusaurus/types';

  export type Props = {
    allContent: AllContent;
  };
  export default function DebugContent(props: Props): JSX.Element;
}

declare module '@theme/DebugGlobalData' {
  export default function DebugGlobalData(): JSX.Element;
}

declare module '@theme/DebugJsonView' {
  export type Props = {
    src: unknown;
    collapseDepth?: number;
  };
  export default function DebugJsonView(props: Props): JSX.Element;
}

declare module '@theme/DebugLayout' {
  export default function DebugLayout(props: {
    children: ReactNode;
  }): JSX.Element;
}

declare module '@theme/DebugRegistry' {
  export default function DebugRegistry(): JSX.Element;
}

declare module '@theme/DebugRoutes' {
  export default function DebugRoutes(): JSX.Element;
}

declare module '@theme/DebugSiteMetadata' {
  export default function DebugSiteMetadata(): JSX.Element;
}