export const getPriorityStyles = priority => {
    let color = '';
    let labelText = '';
   

    switch (priority) {
      case 'without':
        color = "var(--defaultPriorityColor)"
        labelText = 'Without';
        break;
      case 'low':
        color = 'var(--lowPriorityColor)';
        labelText = 'Low';
        break;
      case 'medium':
        color = 'var(--mediumPriorityColor)';
        labelText = 'Medium';
        break;
      case 'high':
        color = 'var(--highPriorityColor)';
        labelText = 'High';
        break;
      default:
        break;
    }
    return { color, labelText, };
  };