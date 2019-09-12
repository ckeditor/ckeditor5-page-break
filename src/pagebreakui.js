/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module page-break/pagebreakui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import pageBreakIcon from '../theme/icons/pagebreak.svg';

/**
 * The page break UI plugin.
 *
 * @extends module:core/plugin~Plugin
 */
export default class PageBreakUI extends Plugin {
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add pageBreak button to feature components.
		editor.ui.componentFactory.add( 'pageBreak', locale => {
			const command = editor.commands.get( 'pageBreak' );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Page break' ),
				icon: pageBreakIcon,
				tooltip: true,
				isToggleable: true
			} );

			view.bind( 'isEnabled' ).to( command, 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => editor.execute( 'pageBreak' ) );

			return view;
		} );
	}
}