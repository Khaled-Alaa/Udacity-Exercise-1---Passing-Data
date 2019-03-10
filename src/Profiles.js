import React, {Component} from 'react'

class Profiles extends Component{
	render(){
    	return(
                     <div className='porfile-list'> {this.props.profiles.map((profile)=>(
						<ul>
							{this.props.users[profile.userID].name}'s favorite movie is {this.props.movies[profile.favoriteMovieID].name}.
                    	</ul>
                ))}
           </div>
          
    	)
    }
}
export default Profiles;