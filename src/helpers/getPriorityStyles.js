export const getPriorityStyles = priority => {
    let color = '';
    let labelText = '';
   

    switch (priority) {
      case 'without':
        color = '#FFFFFF4D';
        labelText = 'Without';
        break;
      case 'low':
        color = '#8FA1D0';
        labelText = 'Low';
        break;
      case 'medium':
        color = '#E09CB5';
        labelText = 'Medium';
        break;
      case 'high':
        color = '#BEDBB0';
        labelText = 'High';
        break;
      default:
        break;
    }
    return { color, labelText, };
  };