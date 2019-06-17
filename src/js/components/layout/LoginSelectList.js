import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { Money, InsertChart } from '@material-ui/icons';


const LoginSelectList = () => {

	return (
		<React.Fragment>
			<ListItem
				button
			>
				<ListItemIcon>
					<Money />
				</ListItemIcon>
				<ListItemText primary="帳本" />
			</ListItem>
			<Divider />
			<ListItem
				button
			>
				<ListItemIcon>
					<InsertChart />
				</ListItemIcon>
				<ListItemText primary="分析" />
			</ListItem>
			<Divider />
			<ListItem button>
				<ListItemText primary="登出" />
			</ListItem>
		</React.Fragment>
	)
}

export default LoginSelectList