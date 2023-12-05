﻿ 
using EasyCaching.Core;
using IoTSharp.Contracts;
using IoTSharp.Data;
using IoTSharp.Data.Extensions;
using IoTSharp.Extensions;
using IoTSharp.Storage;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;

namespace IoTSharp.EventBus.NServiceBus
{

    public class NSBusSubscriber : EventBusSubscriber, ISubscriber
    {
        public NSBusSubscriber(ILogger<EventBusSubscriber> logger, IServiceScopeFactory scopeFactor
           , IStorage storage, IEasyCachingProviderFactory factory, EventBusOption eventBusOption
            ) : base(logger, scopeFactor, storage, factory, eventBusOption)
        {

        }
 
    }
}